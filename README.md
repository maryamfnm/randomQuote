# Random Quote Generator

## Introduction

Your task is to build a backend application that acts as a RESTful API Server for displaying random quotes. 

The application should be written using [NestJS](https://nestjs.com/), [TypeScript](https://www.typescriptlang.org/), [TypeORM](https://typeorm.io), and [SQLite](https://www.sqlite.org)

## Getting Started

The NestJS starter code and [quotes file](https://github.com/VioletLabsInc/random-quote-generator/blob/master/src/data/office_quotes.json) can be found in our random-quote-generator GitHub repository. 
The [NestJS First Steps](https://docs.nestjs.com/first-steps) documents are a great launching point to begin building this.

## What We Expect From You
1. Create an application that creates and uses a RESTful API to retrieve and display a random quote from the given [office-quotes](https://github.com/VioletLabsInc/random-quote-generator/blob/master/src/data/office_quotes.json) dataset. This application does not need to be deployed or hosted anywhere- just something you can run locally.
2. Add tests to your newly created application.
3. Add any additional feature of your choice.
4. Update the README with any information you want to include that will help us understand and run your project.
5. Upload your completed code to your own Git repository and share it with us.

## Need Help?

Feel free to consult any NestJS or TypeScript documentation as necessary. For any other further questions or issues that arise, reach out to your hiring manager.

## Time Estimate

We expect this to take you 1-2 hours to complete. This isn’t a hard limit- it is just for you to plan your time!

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Notes from Maryam 

Below files are being modified:

app.controller.ts - This file is modified to include the method getRandomQuote() to generate the random quotes.

app.service.ts - This file contains the actual implementation of the method that generates the random quotes

package.json - The version of @nestjs/testing is being updated to resolve some of the local issues that I was encountering.

app.controller.spec.ts - This test file has been modified to include the unit test for the getRandomQuote() method. 

## Running the app - The user can generate random quotes by running 

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
and then http://localhost:3000/randomQuote from the browser

## Side note - I spent some amount of time resolving various local issues that I had, the update to the @nestjs/testing version in the dependencies fixed some of those issues eventually. Also I started to work on some extensions to the existing functinality by adding clickable buttons and html/css styling but due to the time constraint I exclude them from my submission.

