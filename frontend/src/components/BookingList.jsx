import { useEffect, useState } from "react";
import axios from "axios";
import "./BookingList.css";

function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/bookings");
      setBookings(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="booking-list">
      <h2>All Bookings</h2>

      {bookings.length === 0 ? (
        <p>No Bookings Found</p>
      ) : (
        bookings.map((booking) => (
          <div key={booking._id} className="booking-card">
            <h3>{booking.name}</h3>
            <p>Guests: {booking.guests}</p>
            <p>Table: {booking.tableNo}</p>
            <p>Date: {booking.date}</p>
            <p>Time: {booking.time}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default BookingList;