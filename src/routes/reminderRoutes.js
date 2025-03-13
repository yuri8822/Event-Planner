const express = require('express');
const { setReminder, getReminders } = require('../controllers/reminderController');

const router = express.Router();

// Route to set a reminder
router.post('/set', setReminder);

// Route to get reminders for a user
router.get('/user/:userId', getReminders);

module.exports = router;