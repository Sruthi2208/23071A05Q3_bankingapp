import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h2>Banking App</h2>
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/balance">Balance</Link>
      <Link to="/transfer">Transfer</Link>
      <Link to="/profile">Profile</Link>
    </div>
  </nav>
);

export default Navbar;
