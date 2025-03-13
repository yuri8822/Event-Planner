const express = require('express');
const { createEvent, getEvents, deleteEvent } = require('../controllers/eventController');

const router = express.Router();

router.post('/events', createEvent);
router.get('/events', getEvents);
router.delete('/events/:id', deleteEvent);

module.exports = router;