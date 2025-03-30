const express = require('express');
const router = express.Router();

const user = require('./user.routes');
const advertiser = require('./advertiser.routes');

router.use('/user', user);
router.use('/user-advertiser', advertiser);
//router.use('/admin-user');
    

module.exports = router;