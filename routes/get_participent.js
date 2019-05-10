//import  module

const express = require('express');
const router = express.Router();

const knex = require('../db/knex');


const get_participent = async(req, res, next) => {
    try {
        
    

    const result = await knex("public.participent").select("*");
    // console.log(result);

    res
        .status(200)
        .send({
            message: "get all participent",
           
        })

    } catch (error) {
        console.error(error)
        
    }

}


router.get('/api/get_participent', get_participent);

module.exports = router;