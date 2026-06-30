const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// Create Booking
router.post("/", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: "Booking Successful" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get All Bookings
router.get("/", async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});

module.exports = router;