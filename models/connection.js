const mongoose = require('mongoose');
require('dotenv').config({path:'../.env'});

const uri = process.env.MONGOURI;
mongoose.connect("mongodb+srv://rachamallaswathi3:aw3yYdh6R1Ifp9If@teacherquizapp.gumaaje.mongodb.net/?retryWrites=true&w=majority");

mongoose.Promise = global.Promise;

module.exports = { mongoose };
