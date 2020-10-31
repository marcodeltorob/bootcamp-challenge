const axios = require('axios');

// Utilities
const { throwError, passError } = require('@utils/errors');

//  We will use https://jsonplaceholder.typicode.com/ API
// Important: resources will not be really updated on the server but it will be faked as if.

const jsonAPI = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

//  GET /posts
exports.findAll = async (req, res, next) => {
    try {
        //  GET all posts from jsonplaceholder API
        const apiResponse = await jsonAPI.get('/posts');

        res.status(200).json(apiResponse.data);
    } catch (err) {
        passError(err, next);
    }

};

//  GET /posts/id
exports.find = async (req, res, next) => {
    try {
        //  GET one post from jsonplaceholder API
        const apiResponse = await jsonAPI.get(`/posts/${req.params.id}`);

        res.status(200).json(apiResponse.data);
    } catch (err) {
        passError(err, next);
    }
};

//  POST /posts
exports.create = async (req, res, next) => {
    try {

        if (!req || !req.body.userId) {
            throwError('User id is required', 422);
        }

        //  POST  create a new post  in jsonplaceholder API
        const apiResponse = await jsonAPI.post('/posts', {
            title: req.body.title,
            body: req.body.body,
            userId: req.body.userId,
        });

        res.status(201).json(apiResponse.data);
    } catch (err) {
        passError(err, next);
    }
};

//  UPDATE /posts
exports.edit = async (req, res, next) => {
    try {
        //  Update a post from jsonplaceholder API
        const apiResponse = await jsonAPI.put(`/posts/${req.params.id}`, {
            title: req.body.title,
            body: req.body.body
        });

        if(apiResponse.status >= 400) {
            throwError(apiResponse.statusText, apiResponse.status);
        }

        res.status(200).json(apiResponse.data);
    } catch (err) {
        passError(err, next);
    }
};

//  DELETE /posts
exports.delete = async (req, res, next) => {
    try {
        //  Delete a post from jsonplaceholder API
        await jsonAPI.delete(`/posts/${req.params.id}`);
        res.status(200).json({
            message: `Post with id: ${req.params.id} has been deleted`
        });
    } catch (err) {
        passError(err, next);
    }
};

