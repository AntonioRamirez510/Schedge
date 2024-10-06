import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/Schedge.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();


  useEffect(()=> {
    const token = localStorage.getItem('authToken');
    if(token){
      setIsLoggedIn(true);
    }
  }, [])

  const handleSearch = (e) => {
    e.preventDefault();
    // Add search logic here
  };

  return (
    <header>
      <div className="logo">
        <img src={logo}></img>
      </div>
      <div className="spacer"></div>
      <div className="link-box">
          <Link to="/">HOME</Link>
          <Link to="/discover">DISCOVER</Link>
      {isLoggedIn ? (
        <>
          <Link to="/my-schedge">MY SCHEDGE</Link>
          <Link to="/account">ACCOUNT</Link>
          <a href="/cart" className="cart-icon">
            <FontAwesomeIcon icon={faShoppingCart} />
          </a>
        </>
      ) : (
        <>
          <a href="/how-it-works">HOW IT WORKS</a>
          <a href="/login">LOGIN</a>
        </>
      )}
      </div>
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </header>
  );
};

export default Header;
