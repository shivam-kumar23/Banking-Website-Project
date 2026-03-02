const express = require('express');
const authController = require('../controllers/auth.controller')

const router = express.Router();

router.post("/account", authController.createAccount)


module.exports = router;