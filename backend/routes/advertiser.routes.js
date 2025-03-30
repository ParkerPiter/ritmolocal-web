const express = require('express');
const advertiserRoutes = express.Router();
const advertirserController = require('../controllers/advertiser.controller');

advertiserRoutes.get('/', advertirserController.getAllAdvertisers); //Admin Route

advertiserRoutes.post('/create', advertirserController.createAdvertiser); //Advertiser Route

advertiserRoutes.post('/login', advertirserController.loginAdvertiser); //Advertiser Route

advertiserRoutes.put('/update', advertirserController.updateAdvertiser); //Advertiser and Admin Route

advertiserRoutes.delete('/delete', advertirserController.deleteAdvertiser); //Admin Route

module.exports = advertiserRoutes;