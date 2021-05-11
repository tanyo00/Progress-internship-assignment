# Technologies used

- Angular
- Angular-router
- CSS
- HTML
- JavaScript

# General Purpose Of The Application

The general purposes of the application is to fetch products (JSON data) from a server or local JSON file and display them.
The application also has the ability to filter the data and disply only products which are in stock or out of stock.
Our app is also mobile-friendly.

# Components And Elements

The SPA consists of several components which are generated with "ng generate component".
The first component is called AllProductsComponent and it shows all products of the store.
The application also contains Navbar which uses @angular/router to toggle between the components.
The next two components are used for filtering the data and displaying all in stock and out of stock products.
I used css keyframes to animate some parts of the ui and css media queries to make our application responsive.

# AssignmentTanyoApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
