import React from 'react';
import NavBar from './NavBar';
import './Header.css';

function Header() {
  return (
    <div className='header'>
        <h1>Tyler Linch</h1>
        <div>
            <NavBar />
        </div>
    </div>
  )
}

export default Header