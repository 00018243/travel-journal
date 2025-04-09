const express = require('express');
const router = express.Router();
const tripController = require('../../controllers/trips');

router.get('/', tripController.getTrips);
router.get('/create', tripController.getCreateTrip);
router.post('/', tripController.postTrip);
router.get('/edit/:id', tripController.getEditTrip);
router.post('/edit/:id', tripController.updateTrip);
router.post('/delete/:id', tripController.deleteTrip);

module.exports = router;
