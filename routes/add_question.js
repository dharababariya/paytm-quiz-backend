//import  module

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');


const add_question = async(req, res, next) => {

    try {

        

                const result = await knex("public.question").insert({
                    question:req.body.question,
                    imagename:req.body.imagename,
                    option1:req.body.option1,
                    option2:req.body.option2,
                    option3:req.body.option3,
                    option4:req.body.option4,
                    answer:req.body.answer});
                res.json({status: 'success', message: 'successfully added new Question',result});

    

       

    } catch (error) {
        console.error(error);

    }

}

router.post('/api/add_question', add_question);

module.exports = router;