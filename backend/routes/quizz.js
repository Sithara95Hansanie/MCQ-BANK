const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quizz');
const Question = require('../models/Question');
const auth = require('../middleware/authMiddleware');

// Route to create a quiz
router.post('/create-quiz',auth, async (req, res) => {
    const { title, description, questionIds } = req.body;

    try {
        // Validate that all question IDs exist
        const questions = await Question.find({ '_id': { $in: questionIds } });

        if (questions.length !== questionIds.length) {
            return res.status(400).json({ message: 'Some question IDs are invalid' });
        }

        const newQuiz = new Quiz({
            title,
            description,
            questions: questionIds
        });

        await newQuiz.save();
        res.status(201).json({ message: 'Quiz created successfully', quiz: newQuiz });
    } catch (error) {
        res.status(500).json({ message: 'Error creating quiz', error });
    }
});

module.exports = router;
