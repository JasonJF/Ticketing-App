// routes/api/assemblies.js

const express = require('express');
const router = express.Router();

// Load assembly model
const Assembly = require("../../../models/Assembly");

// @route GET api/assembly/test
// @description tests assembly route
// @access Public
router.get('/test', (req, res) => res.send('assembly route testing!'));

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
    Assembly.find()
        .then(assemblies => res.json(assemblies))
        .catch(err => res.status(404).json({
            noassembliesfound: 'No Assemblies found'
        }));
});

// @route GET api/assemblies/:id
// @description Get single assembly by id
// @access Public
router.get('/:id', (req, res) => {
    Assembly.findById(req.params.id)
        .then(assembly => res.json(assembly))
        .catch(err => res.status(404).json({
            noassemblyfound: 'No Assembly found'
        }));
});

// @route POST api/assemblies
// @description add/save assembly
// @access Public
router.post('/', (req, res) => {
    // console.log(req.body);
    //save data from body
    // res.send("Successfull.");

    //Check if assembly exists
    Assembly.find({
        partNumber: req.body.partNumber,
        serialNumber: req.body.serialNumber
    }, (err, foundAssy) => {
        if (foundAssy.length) {
            res.send("Assembly already exists: " + foundAssy);
        } else {
            Assembly.create(req.body)
                .then(assembly => res.json({
                    msg: 'Assembly added successfully'
                }))
                .catch(err => res.status(400).json({
                    error: 'Unable to add this assembly'
                }));
        }
    });

});

// @route GET api/books/:id
module.exports = router;