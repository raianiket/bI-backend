const express = require('express');
const router = express.Router();

const taskController = require('../controllers/app');

router.get('/list', taskController.getTask);
router.post('/add',taskController.postTask);

module.exports = router;