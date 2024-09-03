# Doughnut Manager App

Angular application to fetch the initial questionnaire, store the user selection and generate a tree view representation of the selection.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.
 
- Shows the first question by-defualt and based on the selection suggests the next course of action.
- json-server and nodemon for creating a mock server.
- @ngrx/store and @ngrx/effects for state management.
- Bootstrap for grid layout and bootstrap-icons for displaying icons.

## Development server

Run `npm start` for the dev server. It runs `ng serve` and `npm run mock:server`. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Backend mock server

On running `npm start`, mock server will also be started. Navigate to `http://localhost:3000/` once the build is complete and json-server has started to view the mock json created for the questionnaire. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
