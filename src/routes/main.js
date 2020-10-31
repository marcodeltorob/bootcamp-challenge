const express = require('express');

// Controllers
const mainController = require('@controllers/main');

// App
const router = express.Router();

// => GET /
// get a Hello World
router.get('/', mainController.helloWorld);

module.exports = router;