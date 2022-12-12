

const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;


// intialize express
const app = express();


//add functionality to request prompt input from user
//Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false}))



//Use routes
app.use('/openai', require('./routes/openaiRoutes'));




//port config
app.listen(port, ()=> console.log(`Server started on Port: ${port}`));












