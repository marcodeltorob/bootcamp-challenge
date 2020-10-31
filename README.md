# Bootcamp REST API.

The main purpose of this application is to create a simple REST API applying best practices and some endpoints.


# Setup

## Cloning the repository.
    git clone git@github.com:marcodeltorob/bootcamp-challenge.git

## Install.
    npm install

## Run
    npm start

> **_NOTE:_**  The application will run test before server starts.

## Run test.
    npm test


# REST API.

The REST API app is described below:

## Get the Hello World
### Request
`[GET] http://localhost:{env.PORT}/`
### Response
    Hello World

## Get the posts list
### Request
`[GET] http://localhost:{env.PORT}/posts`
### Response
    [
        {
            "userId": 1,
            "id": 1,
            "title": "example",
            "body": "example"
        },
        {
            "userId": 2,
            "id": 20,
            "title": "example",
            "body": "example"
        }
    ]

## Get a single post
### Request
`[GET] http://localhost:{env.PORT}/posts/:id`
### Response
    {
        "userId": 10,
        "id": 100,
        "title": "example",
        "body": "example"
    }

## Create a new post
### Request
`[POST] http://localhost:{env.PORT}/posts`

    {
        "userId": 10,
        "title": "example",
        "body": "example"
    }
Note: `userId` is required to create a new post.
### Response
    {
        "title": "example",
        "body": "example",
        "userId": 10,
        "id": 101
    }

## Edit a post
### Request
`[PUT] http://localhost:{env.PORT}/posts/:id`
    {
        "title": "New Title",
        "body": "New example"
    }
Note: `userId` is required to create a new post.
### Response
    {
        "title": "New Title",
        "body": "New example",
        "id": 100
    }

## Delete a post
### Request
`[DELETE] http://localhost:{env.PORT}/posts/:id`
### Response
    {
        "message": "Post with id: 1 has been deleted"
    }

## Project Technologies.
- For REST API.
    * Node js.
    * Express js.
    * module-alias.
    * dotenv (App Configurations)

- For Testing.
    * Mocha.
    * Chai.
    * Supertest.

## Troubleshooting.

- The application has and `.env` file with a configuration `CURRENT_ENV` set to `development` with this the error handler middleware will forward the errors to the client.
- The application has a simple logger middleware for debug proposes.

# Important Note
Please keep in mind this application is using [JSON Placeholder API](https://jsonplaceholder.typicode.com/) and the resources will not be really updated on the server but it will be faked as if.