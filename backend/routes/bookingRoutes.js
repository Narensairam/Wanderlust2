
const express = require('express');
const { createBooking, getBookingsByUser, getAllBookings } = require('../controllers/bookingController');
const router = express.Router();


router.post('/create', createBooking);


router.get('/user/:userId', getBookingsByUser);


router.get('/all', getAllBookings);

module.exports = router;
