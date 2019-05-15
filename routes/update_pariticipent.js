//import  module

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

const update_participent = async(req, res, next) => {

    try {

        const result = await knex("public.participent")
            .update({score: req.body.score, timespent: req.body.timespent})
            .where("participantID", "=", req.body.participantID)
            .returning("*")

        return res
            .status(200)
            .send({status: 'SUCCESS'});

    } catch (error) {

        console.error(error.message);
        res.status(500);

    }

}

router.put('/api/update_participent', update_participent);
module.exports = router;




