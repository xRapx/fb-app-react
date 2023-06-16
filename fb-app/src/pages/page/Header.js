import React from "react";
import "../../assets/style/app.scss";

const Header = () => {
  return (
    <header className="row">
      <div className="col l-3">
        <h2 className="logo">LOGO</h2>
      </div>
      <div className="col l-6">
        <ul className="nav-center">
          <li>Home</li>
          <li>Profile</li>
          <li>Watch</li>
          <li>Market</li>
        </ul>
      </div>
      <div className="col l-3">
        <ul className="nav-right">
          <li>box-1</li>
          <li>box-2</li>
          <li>box-3</li>
          <li>box-4</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
