
const User = require('../models/User');
const Booking = require('../models/booking.js');

exports.getUserProfile = async (req, res) => {
  const userId = req.user.id; 

  try {
    const user = await User.findById(userId);
    const bookings = await Booking.find({ userId });
    
    res.json({ name: user.name, email: user.email, bookings });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
