//import  module

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const Joi = require('joi');

const add_participent = async (req, res, next) => {
    
    
    try {

        const data = req.body

        // define the validation schema
        const schema = Joi
            .object()
            .keys({
                // name is required
                name: Joi
                    .string()
                    .alphanum()
                    .min(3)
                    .max(30)
                    .required(),
                //email is required
                email: Joi
                    .string()
                    .email()
                    .required(),
               
            });

        Joi.validate(data, schema, async(err, value) => {

            if (err) {
                console.log(err)
                // send a 422 error response if validation fails
                res
                    .status(422)
                    .json({
                        status: 'error', 
                        message: 'Enter valid name & email',
                        data: data});
            } else {
                // send a success response if validation passes
                // console.log(JSON.stringify(req.body));

                const result = await knex("public.participent").insert({
                     name: req.body.name,
                     email: req.body.email, 
                     });
                res.json({
                    status: 'success',
                    message: 'successfully added new participent',
                    
                });

            }

        });

    } catch (error) {
        console.error(error);

    }

}


router.post('/api/add_participent', add_participent);

module.exports = router;