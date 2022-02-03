import { NavLink } from 'react-router-dom';
import React from 'react';
import planet from '../img/planet_images/planet.png';

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/Missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/Profile',
      text: 'My Profile',
    },
  ];
  return (
    <header>
      <div className="logo">
        <img src={planet} alt="logo" style={{ width: '4.5rem', height: '4.5rem' }} />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <nav>
        {links.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
          >
            {link.text}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
