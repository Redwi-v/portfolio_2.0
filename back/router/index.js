const Router = require('express').Router;
const UserController = require('../controllers/User-controller');

const router = new Router();

router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);

router.get('/active/:link', UserController.activate);
router.get('/refresh', UserController.refresh);
router.get('/getUsers', UserController.getUsers);

module.exports = router;