# Angular CRUD Application with NgRx

A robust Angular 18 application implementing CRUD (Create, Read, Update, Delete) operations with state management using NgRx.

## 🚀 Features

- **CRUD Operations:** Easily create, read, update, and delete data entries.
- **State Management:** Efficient state handling with NgRx for predictable state transitions.
- **Search Functionality:** Quickly find records using the search bar at the top.
- **Responsive Design:** Mobile-friendly and responsive user interface.
- **TypeScript:** Strongly typed codebase for better maintainability.

## 🚀 Getting Started
Follow these steps to get the application up and running on your local machine.

1. **Clone the repository**

    Clone this repository to your local machine using Git:
    ``` bash 
    git clone https://github.com/smapps2701/angular-crud-ngrx.git

2. **Navigate to the project directory**

    Move into the project folder:
    ``` bash 
    cd angular-ngrx-crud

3. **Install dependencies**

    Install the required dependencies using ``npm`` or ``yarn``:
    ``` bash 
    npm install
    ```
    or if you prefer Yarn:

    ``` bash 
     yarn install
    ```
    
4. **Run the development server**

    Start the development server, which will serve the application locally:
    ``` bash 
    ng serve
    ```
    After the application is compiled, it will be available at:

    ``` bash 
     http://localhost:4200/
    ```
    
4. **Build the project**

    To build the project for production, run:
    ``` bash 
    ng build
    ```
    The build artifacts will be stored in the ``dist/`` directory.

## 🛠️ Technologies Used

- [Angular 18](https://angular.io/)
- [NgRx](https://ngrx.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [RxJS](https://rxjs.dev/)
- [Bootstrap](https://getbootstrap.com/) *(if used)*

## 📋 Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js:** Install [Node.js](https://nodejs.org/) (v20).
- **Angular CLI:** Install Angular CLI globally:

  ```bash
  npm install -g @angular/cli
- **NPM or Yarn** You can use either NPM or Yarn for package management.

## 📦 NgRx State Management

The application uses NgRx to manage application state, which includes:

- **Actions:** Define the actions that trigger state transitions.
- **Reducers:** Handle how the state should be updated based on the actions.
- **Effects:** Manage side effects like API calls asynchronously.
- **Selectors:** Retrieve specific parts of the state for components.

NgRx is designed to handle complex state and ensure that data flow remains predictable, especially as the application grows.
