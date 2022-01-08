// routes/api/parts.js

const express = require('express');
const router = express.Router();

// Load part model
const Part = require("../../../models/Part");

// @route GET api/part/test
// @description tests part route
// @access Public
router.get('/test', (req, res) => res.send('part route testing!'));

// @route GET api/parts
// @description Get all parts
// @access Public
router.get('/', (req, res) => {
    Part.find()
        .then(parts => res.json(parts))
        .catch(err => res.status(404).json({
            nopartsfound: 'No parts found'
        }));
});

// @route GET api/parts/:id
// @description Get single part by id
// @access Public
router.get('/:id', (req, res) => {
    Part.findById(req.params.id)
        .then(part => res.json(part))
        .catch(err => res.status(404).json({
            nopartfound: 'No Part found'
        }));
});

// @route POST api/parts
// @description add/save part
// @access Public
router.post('/', (req, res) => {
    // console.log(req.body);
    //save data from body
    // res.send("Successfull.");

    //Check if part exists
    Part.find({
        partNumber: req.body.partNumber,
        serialNumber: req.body.serialNumber
    }, (err, foundAssy) => {
        if (foundAssy.length) {
            res.send("Part already exists: " + foundAssy);
        } else {
            Part.create(req.body)
                .then(part => res.json({
                    msg: 'Part added successfully'
                }))
                .catch(err => res.status(400).json({
                    error: 'Unable to add this part'
                }));
        }
    });

});

// @route GET api/parts/:id
module.exports = router;