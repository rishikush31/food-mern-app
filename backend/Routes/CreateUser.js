const express = require('express');
const router = express.Router();
    const User = require('../models/User')
    const { body, validationResult } = require('express-validator');
    const bcrypt = require('bcryptjs');
    const jwt = require('jsonwebtoken');
    const jwtSecret = "MYnameisRishiKushFoodwebsiteHello";
router.post("/createuser", [
    body('email').isEmail(),
    body('password', 'Incorrect Password').isLength({ min: 5 }),
    body('name').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(10);
    let secpassword = await bcrypt.hash(req.body.password, salt);
    try {
       await User.create({
            name: req.body.name,
            password: secpassword,  
            email: req.body.email,
            location: req.body.location
        }).then(
            res.json({ success: true }));
    }
    catch (error) {
        console.log(error)
        res.json({ success: false });
    }
})
router.post("/login", [
    body('email').isEmail(),
    body('password', 'Incorrect Password').isLength({ min: 5 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let email = req.body.email
        let userData = await User.findOne({ email });
        if (!userData) {
            return res.status(404).json({ errors: "Invalid email or password" })
        }
        const passwordtocompare = await bcrypt.compare(req.body.password, userData.password)
        if (!passwordtocompare) {
            return res.status(404).json({ errors: "Invalid email or password" })
        }
        const data = {
            user: {
                id: userData.id
            }
        }
        const authToken = jwt.sign(data, jwtSecret);
        return res.json({ success: true, authToken: authToken });
    }
    catch (error) {
        console.log(error)
        res.json({ success: false });
    }
})
module.exports = router;