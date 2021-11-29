const express = require('express');
const router = express.Router();
const conversationController = require('../controllers/conversation_controller');

router.get('/', conversationController.index);

module.exports = router;
