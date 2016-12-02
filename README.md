# Angular-cli HMR Example

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.22.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development server with HMR

Run `npm run serve:hmr` for a dev server with Hot Module Replacement. Navigate to `http://localhost:4200/`. 
The app will hot swap module (js) code if you change any of the source files.
Note that this will result in a new bootstrap call to your app, so if you want to 
retain state upon hot swap you would need to architect your app to support state
management and update `hmr.ts` to handle capturing and passing in the state.

> Note  
> If you switch between running `ng serve` and `npm run serve:hmr` and have left your browser open
> you should do a hard refresh in the browser to re-establish the webpack-dev-server connection.

**Files added/edited in a default angular-cli project for HMR support**  
- /src
  - /environments
    - environment.dev-hmr.ts *`new`*
    - environment.prod.ts *`modified`*
    - environment.ts *`modified`*
  - hmr.ts *`new`*
  - main.ts *`modified`*
- angular-cli.json *`modified`*
- package.json *`modified`*

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
