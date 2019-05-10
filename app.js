//Import module

const express = require('express');
const app = express();
const dotenv = require('dotenv');
const body_parser = require('body-parser');

//middleware
app.use(body_parser.json());

//env config
dotenv.config();

//fire route

app.use('/v1',require('./routes/add_participent'));
app.use('/v1',require('./routes/delete_participent'));
app.use('/v1',require('./routes/get_participent'));
app.use('/v1',require('./routes/update_pariticipent'));



//Create server
app.listen(5000, () => {
    console.log('listen port 5000');
})

 module.exports = app;