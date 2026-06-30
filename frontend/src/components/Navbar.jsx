import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🍽️ Restaurant Booking</div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#booking">Book Table</a></li>
        <li><a href="#bookings">Bookings</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;