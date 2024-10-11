# Contributing to Angular CRUD with NgRx

Thank you for considering contributing to this project! Contributions are welcome and appreciated. The following is a set of guidelines to help you contribute effectively.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [How Can I Contribute?](#how-can-i-contribute)
   - [Reporting Bugs](#reporting-bugs)
   - [Feature Requests](#feature-requests)
   - [Code Contributions](#code-contributions)
3. [Development Setup](#development-setup)
4. [Coding Guidelines](#coding-guidelines)
5. [Pull Request Guidelines](#pull-request-guidelines)
6. [Issue Tracking](#issue-tracking)

---

## Code of Conduct

By participating in this project, you agree to abide by the [Code of Conduct](CODE_OF_CONDUCT.md). Please read it to understand what kind of behavior is expected and what will not be tolerated.

## How Can I Contribute?

### Reporting Bugs

If you find a bug in the project, please:

1. Search the issue tracker to see if the bug has already been reported.
2. If not found, open a new issue and include as much information as possible:
   - Steps to reproduce the issue
   - Expected behavior
   - What actually happens
   - Screenshots (if applicable)
   - Environment details (browser, OS, etc.)

### Feature Requests

To suggest a feature or enhancement, please:

1. Search the issue tracker for existing feature requests.
2. If your feature is unique, create a new issue describing the feature and its use case.
3. Try to provide as much context as possible so others can understand the need for the feature.

### Code Contributions

Contributions in the form of code improvements or new features are highly appreciated! To contribute:

1. Fork the repository.
2. Create a branch for your changes (use meaningful branch names like `feature/add-user-crud` or `fix/user-reducer`).
3. Implement your changes following the [Coding Guidelines](#coding-guidelines).
4. Commit your changes with a descriptive commit message.
5. Submit a pull request (PR).

---

## Development Setup

To get started contributing, follow these steps to set up the development environment:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/angular-crud-ngrx.git

2. **Install dependencies**:

   ```bash
   npm install

3. **Run the application**:

   ```bash
   ng serve

4. **Run unit tests**:

   ```bash
   ng test

5. **Run end-to-end tests**:

   ```bash
   ng e2e

---

## Coding Guidelines
Please follow these guidelines when contributing to this project:

- **Use Angular Best Practices:** Follow Angular style guides for component structure, services, and state management using NgRx.
- **TypeScript Standards:** Use TypeScript's type safety features (e.g., type annotations, interfaces).
- **NgRx Patterns:** Follow NgRx best practices for actions, reducers, selectors, and effects.
- **Comments:** Add comments where necessary, especially for complex logic in reducers and effects.
- **Linting:** Ensure your code passes linting. Run:
  ```bash
  ng lint
  ```
- **Commit Messages:** 
Use meaningful commit messages following the format:
   - ``feat:`` A new feature
   - ``fix:`` A bug fix
   - ``docs:``  Documentation updates
   - ``style:`` Formatting changes (no code changes)
   - ``refactor:`` FCode refactoring
   - ``test:``  Adding or fixing tests
---
## Pull Request Guidelines
Before submitting your pull request:

- **Ensure Your Branch Is Up to Date:** Rebase or merge the latest changes from the ``main`` branch.
- **Run Tests:** Ensure all unit and end-to-end tests pass. Your code must not break existing functionality.
- **Adhere to the Project's Style Guide:** Follow the Angular style guide and make sure your code is well-documented.
- **Keep PRs Small and Focused:** Large, multi-feature PRs are harder to review. Keep your changes focused and concise.
- **Link the Issue:** If your PR addresses an issue, link the issue number in your PR description (``e.g., Closes #123``).

## Issue Tracking

We use GitHub issues to track bugs, enhancements, and discussions. When opening a new issue, please provide detailed information to help others understand and address it.
