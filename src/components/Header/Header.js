import React from 'react';


import './Header.css';


const Header = () => {
  return (
    <div className="header">

      <div>
        <nav className="navbar navbar-expand-lg navbar-dark justify-content-around">
          <div>
            <h1>ⒹⓇⒺⒶⓂ ⓉⒺⒶⓂ</h1>
          </div>
          <div>
            <a href="/shop" className="link">Contact US</a>
          </div>
        </nav>
      </div>
      <hr />
    </div>
  );
};

export default Header;