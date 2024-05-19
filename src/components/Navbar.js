import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/Navbar.css';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-brand">Movies-App</span>
      </div>
      <div className="navbar-right">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/top-rated" className="navbar-link">Top Rated</Link>
          </li>
          <li className="navbar-item">
            <Link to="/upcoming" className="navbar-link">Upcoming</Link>
          </li>
        </ul>
        <form onSubmit={handleSearch} className="search-form">
          <input 
            type="text" 
            placeholder="Search for a movie..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)} 
            className="search-input" 
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
