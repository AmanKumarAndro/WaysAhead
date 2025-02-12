const express = require('express');
const router = express.Router();
const ChatLog = require('../model/ChatLog');

router.post('/', async (req, res) => {
  try {
    const newLog = new ChatLog({
      user: req.body.userId,
      sessionId: req.body.sessionId || 'default-session',
      message: req.body.message,
      response: req.body.response,
      unresolved: req.body.unresolved || false
    });
    
    await newLog.save();
    res.status(201).json(newLog);
  } catch (error) {
    console.error('Chat log error:', error);
    res.status(500).json({ 
      message: 'Error saving chat log',
      error: error.message 
    });
  }
});

// Get unresolved questions
router.get('/unresolved', async (req, res) => {
  try {
    const unresolvedQuestions = await ChatLog.find({ 
      unresolved: true,
      reviewed: false 
    });
    res.json(unresolvedQuestions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching questions' });
  }
});

// Update reviewed status
router.patch('/:id', async (req, res) => {
  try {
    const updatedLog = await ChatLog.findByIdAndUpdate(
      req.params.id,
      { reviewed: true, adminNotes: req.body.notes },
      { new: true }
    );
    res.json(updatedLog);
  } catch (error) {
    res.status(500).json({ message: 'Error updating question' });
  }
});

module.exports = router; 