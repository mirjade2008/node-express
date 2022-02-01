const { Router } = require('express');
const authController = require('../controllers/authController');

const router = Router();

router.get('./signup', authController.signup_get);
router.get('./signup', authController.signup_post);
router.get('./login', authController.login_get);
router.get('./login', authController.login_post);

module.exports = router;