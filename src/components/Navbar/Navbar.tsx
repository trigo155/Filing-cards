import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div>
     <input type="checkbox" id="check"/>
<nav>
  <ul>
    <li className="hamburger">
      <label className="button">
        <div></div>
        <div className="replace"></div>
        <div></div>
      </label>
    </li>
    <li>Home</li>
    <li>Contact</li>
    <li>Supply</li>
    <li>Order</li>
    <li>Donate</li>
  </ul>
</nav>


   



    </div>
  );
};

export default Navbar;
