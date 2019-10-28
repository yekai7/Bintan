const express = require('express');
const path = require('path');
const env = require('dotenv').config();

const app = express();
const PORTNUMBER = process.env.PN;

app.use(express.static(path.join(__dirname,'public/dist/Bintan')))

app.listen(PORTNUMBER,()=>{
    console.log(`App listening on ${PORTNUMBER}`);
})