import { ExcessiveCancellationsChecker } from '../excessive-cancellations-checker.js'

describe("New test scenarios", () => {
    describe("calculate", () => {
        it("given example", async () => {
            const checker = new ExcessiveCancellationsChecker('./data/test.csv');
            const companiesList = await checker.companiesInvolvedInExcessiveCancellations();
            expect(companiesList).toEqual(["Bank of Mars"]);
            const companiesTotal = await checker.totalNumberOfWellBehavedCompanies();
            expect(companiesTotal).toEqual(1);
        });
        it("new operation after 1min", async () => {
            const checker = new ExcessiveCancellationsChecker('./data/test1.csv');
            const companiesList = await checker.companiesInvolvedInExcessiveCancellations();
            expect(companiesList).toEqual([]);
            const companiesTotal = await checker.totalNumberOfWellBehavedCompanies();
            expect(companiesTotal).toEqual(1);
        });
        it("only new order operation", async () => {
            const checker = new ExcessiveCancellationsChecker('./data/test2.csv');
            const companiesList = await checker.companiesInvolvedInExcessiveCancellations();
            expect(companiesList).toEqual([]);
            const companiesTotal = await checker.totalNumberOfWellBehavedCompanies();
            expect(companiesTotal).toEqual(1);
        });
        it("invalid line", async () => {
            const checker = new ExcessiveCancellationsChecker('./data/test3.csv');
            const companiesList = await checker.companiesInvolvedInExcessiveCancellations();
            expect(companiesList).toEqual([]);
            const companiesTotal = await checker.totalNumberOfWellBehavedCompanies();
            expect(companiesTotal).toEqual(1);
        });
        it("simple test", async () => {
            const checker = new ExcessiveCancellationsChecker('./data/test4.csv');
            const companiesList = await checker.companiesInvolvedInExcessiveCancellations();
            expect(companiesList).toEqual([]);
            const companiesTotal = await checker.totalNumberOfWellBehavedCompanies();
            expect(companiesTotal).toEqual(1);
        });
        it("only canceling operations", async () => {
            // tah errado (?)
            const checker = new ExcessiveCancellationsChecker('./data/test5.csv');
            const companiesList = await checker.companiesInvolvedInExcessiveCancellations();
            expect(companiesList).toEqual(["Neptune Traders"]);
            const companiesTotal = await checker.totalNumberOfWellBehavedCompanies();
            expect(companiesTotal).toEqual(0);
        });
        it("simple test", async () => {
            const checker = new ExcessiveCancellationsChecker('./data/test6.csv');
            const companiesList = await checker.companiesInvolvedInExcessiveCancellations();
            expect(companiesList).toEqual(["Jupiter Markets"]);
            const companiesTotal = await checker.totalNumberOfWellBehavedCompanies();
            expect(companiesTotal).toEqual(0);
        });
        it("simple test", async () => {
            const checker = new ExcessiveCancellationsChecker('./data/test7.csv');
            const companiesList = await checker.companiesInvolvedInExcessiveCancellations();
            expect(companiesList).toEqual(["Saturn Stocks"]);
            const companiesTotal = await checker.totalNumberOfWellBehavedCompanies();
            expect(companiesTotal).toEqual(0);
        });
        it("invalid quantity", async () => {
            const checker = new ExcessiveCancellationsChecker('./data/test8.csv');
            const companiesList = await checker.companiesInvolvedInExcessiveCancellations();
            expect(companiesList).toEqual([]);
            const companiesTotal = await checker.totalNumberOfWellBehavedCompanies();
            expect(companiesTotal).toEqual(1);
        });
        it("no activity", async () => {
            const checker = new ExcessiveCancellationsChecker('./data/test9.csv');
            const companiesList = await checker.companiesInvolvedInExcessiveCancellations();
            expect(companiesList).toEqual([]);
            const companiesTotal = await checker.totalNumberOfWellBehavedCompanies();
            expect(companiesTotal).toEqual(0);
        });
        it("simple test", async () => {
            const checker = new ExcessiveCancellationsChecker('./data/test10.csv');
            const companiesList = await checker.companiesInvolvedInExcessiveCancellations();
            expect(companiesList).toEqual(["Sun Investments"]);
            const companiesTotal = await checker.totalNumberOfWellBehavedCompanies();
            expect(companiesTotal).toEqual(0);
        });
    });
});
