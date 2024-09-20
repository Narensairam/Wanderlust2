
const Booking = require('../models/Booking');

exports.createBooking = (req, res) => {
  const { userId, destination, startDate, endDate, people } = req.body;
  const newBooking = new Booking({ userId, destination, startDate, endDate, people });

  newBooking.save()
    .then(() => res.status(201).json({ message: 'Booking created successfully' }))
    .catch((error) => res.status(400).json({ error: error.message }));
};

exports.getBookingsByUser = (req, res) => {
  const userId = req.params.userId;

  Booking.find({ userId })
    .then((bookings) => res.json(bookings))
    .catch((error) => res.status(400).json({ error: error.message }));
};

exports.getAllBookings = (req, res) => {
  Booking.find()
    .then((bookings) => res.json(bookings))
    .catch((error) => res.status(400).json({ error: error.message }));
};
