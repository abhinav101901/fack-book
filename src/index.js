const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/routes.js');
const mongoose = require('mongoose');
const app = express();
const multer = require("multer");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any())
app.use(bodyParser.json());


mongoose.connect("mongodb+srv://shivanshsharma:76Xjx6fMmlcP51HZ@shivansh-p7.zwfahec.mongodb.net/bookManagementgroup4", {
        useNewUrlParser: true
    })
    .then(() => console.log("MongoDb is connected")) // asynchronous behaviour
    .catch(err => console.log(err))

app.use('/', route)


app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});