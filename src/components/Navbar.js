import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <>
      <nav>
        <div className="brand">
          <img src="./brand.png" alt="profile-pic" />
          <div>M Abhay Kamath</div>
        </div>
        <div className="title">Software Developer</div>
      </nav>
    </>
  );
}

export default Navbar;
