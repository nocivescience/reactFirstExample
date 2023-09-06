const {
    indexController
} = require('../controllers/controllers.js');
const router = require('express').Router();
router.get('/', indexController);
module.exports = router;
