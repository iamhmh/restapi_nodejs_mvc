const router = require('express').Router();
const userController = require('../controllers/userController');


router.route('/users')
    .post(userController.create)
    .get(userController.getAll);   

router.route('/users/:userId')
    .get(userController.get)
    .put(userController.update)
    .delete(userController.deleteUser);
    
module.exports = router;