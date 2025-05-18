const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  category: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, required: true },
  organizer: String,
  rsvps: [{
    name: String,
    email: String,
    phone: String,
    attendees: Number
  }]
});

module.exports = mongoose.model('Event', eventSchema);
