require('dotenv').config();

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const SECRET_KEY = process.env.JWT_SECRET;
const users = [];

const generateToken = (user) => {
    return jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });
  };


router.post('/register', async (req, res) => {
    const { username, password, role } = req.body;
    console.log( username, password, role);
    try {
        let user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }
        user = new User({ username, password, role });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        const payload = { user: { id: user.id } };
        jwt.sign(payload, 'secret', { expiresIn: 360000 }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {

        let user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }
        // const payload = { user: { id: user.id } };
        // console.error(payload);

        // jwt.sign(payload, 'secret', { expiresIn: 360000 }, (err, token) => {
        //     if (err) throw err;
        //     res.json({ token });
        // });

        const token = generateToken(user);
        res.json({ token });
      

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;



