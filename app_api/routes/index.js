const express = require("express");
const router = express.Router();

const tripsController= require("../controllers/trips");

router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip);



//Gett Method routes tripsFindByCode
//Put method routes tripsupdateTrip
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;