# Autocomplete Challenge

This project is a Vue.js application that provides two autocomplete fields: one for cities and another for books. Users can type into the fields to see suggestions from a predefined dataset, which updates dynamically based on user input.

## Features

- **Cities Autocomplete**: Matches approximate city names (e.g., typing "san" shows "san jose", "santiago", etc.).
- **Books Autocomplete**: Matches book titles and displays both the title and author.
- **Dynamic Search**: Updates results in real-time as the user types (after 3 characters).
- **No Results Feedback**: Alerts the user when no results match their input.
- **Usability Enhancements**:
  - Autofocus on the search field when the page loads.

## Built With

- **Vue 3**: Framework for building the user interface.
- **Quasar Framework**: For UI components and styling.
- **Vue Router**: Manages the navigation of the app.
- **Vuex/Pinia (Store)**: Centralized state management for datasets and query results.
- **Pug**: Templating for clean and concise component structure.
- **Jest**: For unit testing key components and functionality.

---

## Project Setup

### Prerequisites

Ensure you have the following installed:
- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd autocomplete-challenge
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application
To run the project:
```
  npm run serve
```
Open your browser and navigate to http://localhost:8080.


## Testing
This project includes unit tests to ensure core functionalities work as expected.

### Run Tests
To execute the tests:

```bash
npm run test
```

### Test Coverage
The following aspects are covered by unit tests:

Input field behavior.  
Dynamic filtering for cities and books datasets.  
Rendering of results and "no results" messages.  

## Project Setup
```
src/
├── assets/               # Static assets (if any)
├── components/           # Vue components
│   ├── FormLayout.vue    # Component used in Book and Citie search
│   └── Header.vue        # Module for header
├── pages/
│   ├── BooksPage.vue     # Page for managing cities data
│   ├── CitiesPage.vue    # Page for managing books data
│   ├── HomePage.vue      # Main page
│   └── NotFoundPage.vue  # Not found page
├── router/               # router
├── store/                # Vuex store
│   ├── cities.js         # Module for managing cities data
│   └── books.js          # Module for managing books data
├── styles/               # Page views
├── test/                 # Page views
│   ├── components/       # Test for components
│   └── store/            # Test for store
├── App.vue               # Root component
└── main.js               # Entry point

```