//import  module

const express = require('express');
const router = express.Router();

const knex = require('../db/knex');

const get_question = async(req, res, next) => {
    try {

        const result = await knex("public.question").select("*")
        // console.log(result);

        res
            .status(200)
            .send({message: "get random questions ", result})

    } catch (error) {
        console.error(error)

    }

}

router.get('/api/get_question', get_question);

module.exports = router;