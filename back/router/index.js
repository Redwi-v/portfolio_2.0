const Router = require('express').Router;
const UserController = require('../controllers/User-controller');
const ProjectController = require('../controllers/Project-controller');
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');

const router = new Router();

router.post(
    '/registration',
    body('email').isEmail(),
    body('password').isLength({ min: 3, max: 23 }),
    UserController.registration
);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);

router.get('/activate/:link', UserController.activate);
router.get('/refresh', UserController.refresh);
router.get('/users', authMiddleware, UserController.getUsers);

router.get('/projects', ProjectController.getProjectsList);
router.post('/projects', ProjectController.createProject);

module.exports = router;
