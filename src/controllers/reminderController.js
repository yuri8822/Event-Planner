const Reminder = require('../models/reminderModel');
const Event = require('../models/eventModel');

// Set a reminder for an event
exports.setReminder = async (req, res) => {
    const { eventId, reminderTime } = req.body;

    try {
        const reminder = new Reminder({
            eventId,
            reminderTime,
            userId: req.user.id
        });

        await reminder.save();
        res.status(201).json({ message: 'Reminder set successfully', reminder });
    } catch (error) {
        res.status(500).json({ message: 'Error setting reminder', error });
    }
};

// Get reminders for a user
exports.getReminders = async (req, res) => {
    try {
        const reminders = await Reminder.find({ userId: req.user.id }).populate('eventId');
        res.status(200).json(reminders);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving reminders', error });
    }
};