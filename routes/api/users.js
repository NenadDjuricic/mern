const express = require('express');
const router = express.Router();

//load user model
const User = require('../../models/User');

//@route get api/users/test
//@desc Test user route
//@access Public
router.get('/test', (req, res) => res.json({
    msg: 'User works'
}));

//@route get api/users/register
//@desc register user
//@access Public
router.post('/register', (req, res) => {
    User.findOne({
            email: req.body.email
        })
        .then(user => {
            if (user) {
                return res.status(400).json({
                    email: 'Email already exists!'
                });
            } else {
                const newUser = newUser({
                    name: req.body.name,
                    email: req.body.email,
                    avatar: avatar,
                    password: req.body.password
                });
            }
        });

});


module.exports = router;