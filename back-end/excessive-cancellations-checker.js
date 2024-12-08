import fs from 'fs';
import path from 'path';

export class ExcessiveCancellationsChecker {

    /* 
        We provide a path to a file when initiating the class
        you have to use it in your methods to solve the task
    */
    constructor(filePath) {
        this.filePath = filePath;
        this.data = null
    }

    // Reads the CSV file asynchronously and returns its content.
    readCSVFile() {
        try {
            return fs.promises.readFile(path.resolve(this.filePath), 'utf-8');
        } catch (error) {
            throw new Error(`Error reading CSV file: ${error.message}`);
        }
    }

    // Validates the input fields of a transaction.
    isInputValid(dateTime, name, type, quantity) {
        return (
            dateTime &&
            name &&
            type &&
            !isNaN(quantity) &&
            ['D', 'F'].includes(type.trim()) &&
            parseInt(quantity, 10) >= 0
        );
    }
    // Checks if a company has excessive cancellations.
    hasExcessiveCancellations(company, windowStartIndex, windowEndIndex) {
        return windowEndIndex - windowStartIndex > 1 
            && company.totalCancels / company.totalOrders > 1/3
    }

    // Updates the excessive cancelling flag for all companies based on the last window.
    checkAllCompanies(dataMap) {
        for (const companyName of Object.keys(dataMap)) {
            const company = dataMap[companyName];
            if (this.hasExcessiveCancellations(company, company.windowStartIndex, company.transactions.length)) {
                company.excessiveCancelling = true;
            }
        }
    }
    
    // Processes a single transaction and updates the company's data.
    processTransaction(company, transaction) {
        company.transactions.push(transaction);

        if(transaction.type === 'F')
            company.totalCancels += transaction.quantity
        if(transaction.type === 'D')
            company.totalOrders += transaction.quantity

        let windowAdjusted = false
        let oldWindowStartIndex = company.windowStartIndex

        // Slide the window to ensure only transactions within the last minute are considered.
        while(company.windowStartIndex < company.transactions.length - 1
            && transaction.dateTime - company.transactions[company.windowStartIndex].dateTime >= 60000){

            windowAdjusted = true
            const startTransaction = company.transactions[company.windowStartIndex];
    
            if (startTransaction.type === 'F') {
                company.totalCancels -= startTransaction.quantity;
            } else if (startTransaction.type === 'D') {
                company.totalOrders -= startTransaction.quantity;
            }
            company.windowStartIndex += 1;

        }

        // If the window was adjusted, check for excessive cancellations.
        if(windowAdjusted && this.hasExcessiveCancellations(company, oldWindowStartIndex, company.transactions.length - 1)) {
            company.excessiveCancelling = true;
        }
    }

    // Builds a map of company data from the CSV file.
    async buildDataMap() {
        const csvData = await this.readCSVFile();
        const lines = csvData.split('\n').filter(line => line.trim());
        const dataMap = {};

        for (const line of lines) {
            const [dateTime, name, type, quantity] = line.split(',');

            if(!this.isInputValid(dateTime, name, type, quantity)) continue;
            
            const transaction = {
                dateTime: new Date(dateTime),
                type: type.trim(),
                quantity: parseInt(quantity.trim(), 10)
            }
            if (!dataMap[name]) {
                dataMap[name] = {
                    transactions: [],
                    totalCancels: 0,
                    totalOrders: 0,
                    excessiveCancelling: false,
                    windowStartIndex: 0,
                };
            }

            this.processTransaction(dataMap[name], transaction);

        }
        this.checkAllCompanies(dataMap);
        this.data = dataMap;
    }


    async getData() {
        if(this.data === null) {
            await this.buildDataMap()
        }
        return this.data
    }

    /**
    * Returns the list of companies that are involved in excessive cancelling.
    * Note this should always resolve an array or throw error.
    */
    async companiesInvolvedInExcessiveCancellations() {
        const data = await this.getData()
        return Object.keys(data).filter(company => data[company].excessiveCancelling)
    }

    /**
     * Returns the total number of companies that are not involved in any excessive cancelling.
     * Note this should always resolve a number or throw error.
    */
    async totalNumberOfWellBehavedCompanies() {
        const data = await this.getData()
        return Object.keys(data).filter(company => !data[company].excessiveCancelling).length
    }
    
}
