const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', async (req, res) => {
  try {
    const { message } = req.body;
    
    const response = await axios.post('https://api.deepseek.com/v1/chat/completions', {
      messages: [
        { role: "user", content: message }
      ],
      model: "deepseek-chat",
      temperature: 0.5,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`
      }
    });

    const reply = response.data.choices[0].message.content;
    
    res.json({ 
      reply: reply,
      model: "deepseek-r1",
    });
    
  } catch (error) {
    console.error('DeepSeek API error:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'AI service unavailable',
      details: error.response?.data || error.message
    });
  }
});

module.exports = router; 