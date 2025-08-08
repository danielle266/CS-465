const mongoose = require('mongoose');
const Trip = require('../../app_server/models/travlr'); //register model
const Model = mongoose.model('trips');

//GET: /trips - list all the trips
//REgardless of outcome, response must include HMTL status code
//and JSON message to the requesting client
const tripsList = async function(req, res){
    const q = await Model
        .find({}) // No filter, return all records
        .exec();


    // uncomment the follwing line to show results of querey
    // on the console
    //console.log(q);

    if (!q)
    {  // Database returned no data
        return res
                .status(404)
                .json(err);
    } else { // Return resulting trip list
        return res
            .status(200)
            .json(q);
    }

};
//GET: /trips - list all the trips
//REgardless of outcome, response must include HMTL status code
//and JSON message to the requesting client
const tripsFindByCode = async function (req, res) {
    const q = await Model
        .find({'code' :req.params.tripCode }) // No filter, return all records
        .exec();


    // uncomment the follwing line to show results of querey
    // on the console
    //console.log(q);

    if (!q) {  // Database returned no data
        return res
            .status(404)
            .json(err);
    } else { // Return resulting trip list
        return res
            .status(200)
            .json(q);
    }

};


module.exports = {
    tripsList,
    tripsFindByCode
};





//http://localhost:3000/api/trips













