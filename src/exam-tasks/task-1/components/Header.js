import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/aboutus'>About</Link>
        </li>
        <li>
          <Link to='/contacts'>Contacts</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
