import "./Home.css";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BookingForm from "../components/BookingForm";
import BookingList from "../components/BookingList";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section id="booking" className="booking-section">
        <BookingForm />
      </section>

      <section id="bookings" className="list-section">
        <BookingList />
      </section>

      <Footer />
    </>
  );
}

export default Home;