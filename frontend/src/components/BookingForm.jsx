import { useState } from "react";
import axios from "axios";
import "./BookingForm.css";

function BookingForm() {

    const [formData, setFormData] = useState({
        name: "",
        guests: "",
        tableNo: "",
        date: "",
        time: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await axios.post(
                "http://localhost:5000/api/bookings",
                formData
            );

            alert("Table Booked Successfully!");

            setFormData({
                name: "",
                guests: "",
                tableNo: "",
                date: "",
                time: ""
            });

        } catch (error) {
            console.log(error);
            alert("Booking Failed");
        }
    };

    return (

        <div className="booking-form">

            <h2>Book Your Table</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Customer Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="guests"
                    placeholder="Number of Guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                />

                <select
                    name="tableNo"
                    value={formData.tableNo}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Table</option>

                    <option value="1">Table 1</option>
                    <option value="2">Table 2</option>
                    <option value="3">Table 3</option>
                    <option value="4">Table 4</option>
                    <option value="5">Table 5</option>
                    <option value="6">Table 6</option>
                    <option value="7">Table 7</option>
                    <option value="8">Table 8</option>
                    <option value="9">Table 9</option>
                    <option value="10">Table 10</option>

                </select>

                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />

                <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                />

                <button type="submit">
                    Book Table
                </button>

            </form>

        </div>

    );
}

export default BookingForm;