import React from "react";
import "./DynamicNavbar.scss";
import { IoSearch } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import ItemList from "../2DynamicNested/1ItemList";
import { useNavigate } from "react-router";

const Navbar = () => {
  const Local_name = localStorage.getItem("Username");
  const name = Local_name ? Local_name : "Login";

  const navigate = useNavigate();
  return (
    <>
      <div className="Dynamic-Navbar">
        <div className="content-sec">
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
          <div className="col-2">
            <li className="login">
              <span>{name}</span>
            </li>
            <li>
              <span onClick={() => navigate("/wishList")}>Wishlist</span>
            </li>
            <li>
              <span>More</span>
              <MdOutlineKeyboardArrowDown />
            </li>
            <li>
              <FaShoppingCart />
              <span>Cart</span>
            </li>
          </div>
        </div>
      </div>

      <ItemList />
    </>
  );
};

export default Navbar;
