//import  module

const express = require('express');
const router = express.Router();

const knex = require('../db/knex');

const get_question = async(req, res, next) => {
    try {

        const Qns = await knex("public.question").select('question') ;

       // const Options = await knex("public.question").select("option1","option2","option3","option4")

      return res
            .status(200)
            .send({message: "get random questions ", Qns })

    } catch (error) {
        console.error(error);

    }

}

router.get('/api/get_question', get_question);

module.exports = router;