const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');

const Question = require('../models/Question');

//create a question
router.post('/',auth, async(req,res)=>{
    console.error(auth);
    const {questionText, options } = req.body;
    try{
        const newQuestion = new Question({questionText, options, createdBy :req.user.id});
        const question = await newQuestion.save();
        res.json(question);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// get question

router.get('/',auth,async(req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (err){
        res.status(500).json({message:err.message});
    }
});

module.exports = router;
