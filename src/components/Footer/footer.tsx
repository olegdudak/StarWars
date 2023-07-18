import React from 'react';


function Footer() {
  return (
    <div className="footer text-yellow-300 border-t-2 border-yellow-300 bg-black">
      <div className="footer_container p-8 flex justify-center flex-col">
          <div className="text pb-3">More From Star Wars:</div>
          <div className="footer_left">
              <a className="link aw-independent link_footer" 
              href="https://www.facebook.com/StarWars" 
              target="_blank" rel="noopener noreferrer"> 
              <span className="description px-3">Facebook  </span> </a>

              <a className="link aw-independent link_footer" 
              href="https://www.instagram.com/starwars/"
              target="_blank" rel="noopener noreferrer">
              <span className="description px-3">Instagram  </span> </a>

              <a className="link aw-independent link_footer" 
              href="https://twitter.com/starwars" target="_blank" 
              rel="noopener noreferrer"> <span 
              className="description px-3">Twitter  </span> </a>

              <a className="link aw-independent link_footer" 
              href="https://www.youtube.com/user/starwars" 
              target="_blank" rel="noopener noreferrer">
              <span className="description px-3">Youtube  </span> </a>
          </div>
          
      </div>
    </div>
  );
}

export default Footer;