const mongoose = require('mongoose');

const ChatLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  sessionId: String,
  message: String,
  response: String,
  unresolved: {
    type: Boolean,
    default: false
  },
  reviewed: {
    type: Boolean,
    default: false
  },
  adminNotes: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ChatLog', ChatLogSchema); 