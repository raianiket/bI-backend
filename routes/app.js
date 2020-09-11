const express = require('express');
const router = express.Router();

const taskController = require('../controllers/app');

router.get('/list', taskController.getT);
router.post('/add',taskController.postT);

module.exports = router;