const mongoose = require("mongoose");

//Define schema

const assySchema = new mongoose.Schema({

    partNumber: String,
    partDescription: String,
    serialNumber: String,
    mantisID: Number,
    subAssemblies: [],
    ecps: [],
    tickets: []
});

//export model
module.exports = Assembly = mongoose.model("assembly", assySchema);