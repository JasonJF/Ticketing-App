const mongoose = require("mongoose");

//create schema

const partSchema = new mongoose.Schema({
    partNumber: String,
    partDescription: String
});


//export model

module.exports = Part = mongoose.model("Part", partSchema);