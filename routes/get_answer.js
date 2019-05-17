//import  module

const express = require('express');
const router = express.Router();

const knex = require('../db/knex');

const GetAnswer = async(req, res, next) => {
    try {

        const answer = await knex("public.question").select('answer')

      return res
            .status(200)
            .send({message: "get answer ", answer})

    } catch (error) {
        console.error(error)

    }

}

router.get('/api/get_answer', GetAnswer);

module.exports = router;