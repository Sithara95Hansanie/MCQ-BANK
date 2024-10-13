const mongoose = require('mongoose');

const OptionSchema = new mongoose.Schema({
    question_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
    text: { type: String, required: true },
    is_correct: { type: Boolean, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Option', OptionSchema);
