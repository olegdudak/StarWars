import React from 'react';

import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className="header_container ">
      <div className="Header flex justify-between text-yellow-300 border-b-2 border-yellow-300 bg-black p-5">
        <div className="header_left text-7xl">
          <h1 className=''>Star Wars</h1>
        </div>
        <div className="header_right flex justify-between items-center">
          <div className="btn_container px-16">
              <Link to="/" className="px-12 py-4 text-3xl border-b-2 border-yellow-300">Home</Link>
          </div>
          <div className="btn_container px-16">
              <Link to="/cards" className="px-12 py-4 text-3xl border-b-2 border-yellow-300">People</Link>
          </div>
          <div className="btn_container px-16">
              <Link to="/info" className="px-16 py-4 text-3xl border-b-2 border-yellow-300">Info</Link>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default Header;