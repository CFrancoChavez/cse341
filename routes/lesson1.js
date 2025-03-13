const express = require('express');
const router = express.Router();
const lesson1Controller = require('../controllers/lesson1');

router.get('/', lesson1Controller.getHome);
router.get('/about', lesson1Controller.getAbout);

module.exports = router;