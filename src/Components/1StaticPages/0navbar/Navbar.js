import React from "react";
import "./Navbar.scss";
import { CiSearch } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import StaticNested from "../1nested/0StaticNested";
import Footer from "../2footer/Footer";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const Local_name = localStorage.getItem("Username");
  const name = Local_name ? Local_name : "Login";

  return (
    <>
      <div className="Navbar">
        <div className="content-sec">
          <div className="col-1">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus_mobile-39120d.svg"
              alt="Flipkart Logo"
            />
            <div className="input">
              <CiSearch />
              <input
                type="text"
                placeholder="Search for Products, Brands and More"
              />
            </div>
          </div>
          <div className="col-2">
            <li className="login" onClick={() => navigate("/Login")}>
              <CgProfile />
              <span>{name}</span>
              <MdOutlineKeyboardArrowDown />
            </li>
            <li>
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
                alt="Add to Cart"
              />
              <span>Cart</span>
            </li>
            <li>
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"
                alt="Add to Cart"
              />
              <span>Wishlist</span>
            </li>
            <IoMdMore />
          </div>
        </div>
      </div>

      <StaticNested />
      <Footer />
    </>
  );
};

export default Navbar;
