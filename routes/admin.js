const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');


router.get('/',adminController.home)
router.get('/user',adminController.user)
router.get('/task',adminController.task)
router.post('/user', adminController.createUser);
router.post('/task', adminController.assignTask);
router.get('/download',adminController.download)



module.exports = router;
