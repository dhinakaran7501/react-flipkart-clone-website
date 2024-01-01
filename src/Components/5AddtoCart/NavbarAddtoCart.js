import React from "react";
import { IoSearch } from "react-icons/io5";

const NavbarAddtoCart = () => {
  return (
    <div className="NavbarAddtoCart">
      <div className="content-sec">
        <div className="contnet-flexbox">
          <div className="img-sec">
            <img src="../../images/0subnavbar/logo.png" alt="Flipkart Logo" />
          </div>
          <div className="col-1">
            <div className="input">
              <input
                type="text"
                placeholder="Search for Products, Brands and More"
              />
              <IoSearch />
            </div>
          </div>
        </div>
        <div className="col-2">
          <li style={{ color: "#fff", backgroundColor: "transparent" }}>
            <p>Wishlist</p>
          </li>
          <li className="login">
            <span>Login</span>
          </li>
        </div>
      </div>
    </div>
  );
};

export default NavbarAddtoCart;
