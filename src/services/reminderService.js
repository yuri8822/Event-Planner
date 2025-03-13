const Reminder = require('../models/reminderModel');
const Event = require('../models/eventModel');
const notificationUtil = require('../utils/notificationUtil');

// Function to set a reminder for an event
const setReminder = async (userId, eventId, reminderTime) => {
    const reminder = new Reminder({
        userId,
        eventId,
        reminderTime
    });
    await reminder.save();
    return reminder;
};

// Function to get reminders for a user
const getReminders = async (userId) => {
    return await Reminder.find({ userId }).populate('eventId');
};

// Function to send reminder notifications
const sendReminderNotifications = async () => {
    const reminders = await Reminder.find();
    reminders.forEach(reminder => {
        const currentTime = new Date();
        if (reminder.reminderTime <= currentTime) {
            // Fetch event details
            Event.findById(reminder.eventId).then(event => {
                notificationUtil.sendNotification(reminder.userId, `Reminder for event: ${event.name}`, `Don't forget about your event: ${event.description} at ${event.date} ${event.time}`);
            });
        }
    });
};

module.exports = {
    setReminder,
    getReminders,
    sendReminderNotifications
};