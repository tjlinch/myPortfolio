import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <img src='https://img.icons8.com/ios-glyphs/344/beefburger.png' alt='Menu'></img>
        </button>

        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
           <ul className='list-group'>
            <Link to='/'>
                <li className='list-group-item'>Home</li>
            </Link>
            <Link to='/portfolio'>
                <li className='list-group-item'>Projects</li>
            </Link>
           </ul>
        </div>
        </div>
    </div>
  );
}

export default NavBar