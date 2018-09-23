// Handle routing in this file, access controllers for logic
const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

// @route:       POST api/location/
// @description: Retrieve locations based on a postcode
// @access:      Public
router.post('/location', controller.getLocations);

// @route:       POST api/municipality/
// @description: Retrieve municipalities based on a postcode 
// @access:      Public
router.post('/municipality', controller.getMunicipalities);

module.exports = router;