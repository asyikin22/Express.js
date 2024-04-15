const express = require('express')
const router = express.Router();
const users = require('./users');

//GETS ALL USERS
router.get('/', (req, res) => {
    res.json(users);
})

//GETS SINGLE USER + IF THE USER DOESNT EXIST
router.get('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));

    if (found) {
        res.json(users.filter(user => user.id === parseInt(req.params.id)));

        } else {
            res.status(400).json({ msg: `No user with the ID of ${req.params.id}`})
        }
    });

module.exports = router;


