const express = require('express');
const path = require('path');
const env = require('dotenv').config();

const app = express();
const PORTNUMBER = process.env.PN;

app.use(express.static(path.join(__dirname,'public/dist/Bintan')))

app.use('*', (req,res)=>{
    res.send('<h1>PAGE NOT FOUND!!</h1>');
})

app.listen(PORTNUMBER,()=>{
    console.log(`App listening on ${PORTNUMBER}`);
})