const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const userCtrl = require('../controllers/user');

router.post('/signup', [
  body('email').isEmail(),
  body('password').isLength({ min: 5 })
], userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;