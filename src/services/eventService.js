const Event = require('../models/eventModel');

const createEvent = async (eventData) => {
    const event = new Event(eventData);
    return await event.save();
};

const getUpcomingEvents = async () => {
    const currentDate = new Date();
    return await Event.find({ date: { $gte: currentDate } }).sort({ date: 1 });
};

const deleteEvent = async (eventId) => {
    return await Event.findByIdAndDelete(eventId);
};

module.exports = {
    createEvent,
    getUpcomingEvents,
    deleteEvent,
};