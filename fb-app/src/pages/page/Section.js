import React from "react";
import "../../assets/style/app.scss";

const Section = () => {
  return (
    <div className="section-menu">
      <div className="row">
        <nav className="col l-5">
          <ul className="div-menu">
            <li>Avatar</li>
            <li>Bạn bè</li>
            <li>Marketplace</li>
            <li>Watch</li>
            <li>Nhóm</li>
          </ul>
        </nav>
        <div className="col l-7">
          <div className="row">
            <div className="col l-4 m-4 c-12 l-o-4 m-o-4">Content</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
