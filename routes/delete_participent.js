//import  module

const express = require('express');
const router = express.Router();

const knex = require('../db/knex');

const delete_participent = async(req, res, next) => {

    try {
        const result = await knex("public.participent")
            .delete()
            .where("participantID", "=", req.body.participantID)
        return res
            .status(200)
            .send({status: 'Successfully Deteted'});
    } catch (error) {
        console.error(error.message);
        res.status(500);

    }

}

router.delete('/api/delete_participent', delete_participent);

module.exports = router;