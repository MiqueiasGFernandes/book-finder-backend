# BOOK FINDER BACKEND

## Object

This project it's a simple repository implementing Clean Architecture to search books with any books API. Currently, it uses Google Books API.

## Structure
All source code it's in 'src' path

```
- domain: Project essential business code, models, usecases and errors mapping
- data: Layer to implement concrect classes from usecases and models
- infra: Comunicate with external API's and Frameworks
- main: Layer to call and initialize all project code
```

# Scripts

```
  start - Run development server
  build - Generate Typescript build
  lint - Search by code styling errors
  lint:fix - Search and fix code styling errors
  test - Run unit tests
  test:watchAll - Run unit tests in "watch" mode
  test:coverage - Run unit tests with coverage search
  commit - Perform commit using "Conventional Commit" pattern using "commizen" library
```


