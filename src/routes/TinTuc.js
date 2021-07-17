const express = require('express');
const router = express.Router();
const tinTucController = require('../app/controllers/TinTucController');

router.use('/:slug', tinTucController.show);
router.use('/', tinTucController.index);

module.exports = router;
