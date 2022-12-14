import React from 'react';
import { Link } from 'react-router-dom';
import icons8Burger from '../assets/icons8-beef-burger-60.png';
import './NavBar.css';

function NavBar() {
  return (
    <div className='navBar'>
       {/* fullscreen nav list */}
        <div className='fullscreenNav'>
            <ul>
                <Link to='/myPortfolio'>
                    <li className='list-group-item'>Home</li>
                </Link>
                <Link to='/portfolio'>
                    <li className='list-group-item'>Projects</li>
                </Link>
                <Link to='/about'>
                    <li className='list-group-item'>About Me</li>
                </Link>
                <Link to='/contact'>
                    <li className='list-group-item'>Contact</li>
                </Link>
            </ul>
        </div>
        
        {/* mobile nav list in an offcanvas menu */}
        <button className="btn btn-light offCanvasBtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            {/* TODO: link to burger icon on references page */}
            {/* <a target="_blank" href="https://icons8.com/icon/95244/beef-burger">Beef Burger</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
            <img src={icons8Burger} alt='Nav menu'></img>
        </button>

        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                {/* <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5> */}
                <button type="button" className="btn-close offCanvasCloseBtn" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
            <ul className='list-group'>
                <Link to='/myPortfolio'>
                    <li className='list-group-item' data-bs-dismiss='offcanvas' aria-label='Close'>Home</li>
                </Link>
                <Link to='/portfolio'>
                    <li className='list-group-item' data-bs-dismiss='offcanvas' aria-label='Close'>Projects</li>
                </Link>
                <Link to='/about'>
                    <li className='list-group-item' data-bs-dismiss='offcanvas' aria-label='Close'>About Me</li>
                </Link>
                <Link to='/contact'>
                    <li className='list-group-item' data-bs-dismiss='offcanvas' aria-label='Close'>Contact</li>
                </Link>
            </ul>
            </div>
        </div>
    </div>
  );
}

export default NavBar