const express = require('express');

// Controllers
const externalAPIController = require('@controllers/externalAPI');

// App
const router = express.Router();

// => GET /posts
// get all posts from API
router.get('/posts', externalAPIController.findAll);

// => GET /posts/id
// get one post from API
router.get('/posts/:id', externalAPIController.find);

// => POST /posts
// create one post from API
router.post('/posts', externalAPIController.create);

// => PUT /posts/id
// edit one post from API
router.put('/posts/:id', externalAPIController.edit);


// => DELETE /posts/id
// delets one post from API
router.delete('/posts/:id', externalAPIController.delete);

module.exports = router;