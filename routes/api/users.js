const express = require('express');
const router = express.Router();


//@route get api/users/test
//@desc Test user route
//@access Public
router.get('/test', (req, res) => res.json({
    msg: "User works"
}));

module.exports = router;