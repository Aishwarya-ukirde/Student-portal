import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="main">
      <div className="display">
        {/* <img src={Logo}/> */}
        <img src="/Logo.png" className="w-[96px] h-[49px] mt-7" />

        <h1 className="heading">Student Login</h1>
        <div className="subheading">
          <p className="one">Hello, Gabrisa!</p>
          <p className="two">Class 7, Math + Science</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
