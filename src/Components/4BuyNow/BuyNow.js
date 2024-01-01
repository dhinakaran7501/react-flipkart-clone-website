import React from "react";
import TextField from "@mui/material/TextField";
import "./BuyNow.scss";
import { FaTruck } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { MdStar } from "react-icons/md";
import BuyNowFooter from "./BuyNowFooter";

const BuyNow = () => {
  return (
    <div className="BuyNow">
      <div className="Buynow-Navbar">
        <div className="logo">
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            alt="Flipkart Logo"
          />

          <ul>
            <li>Explore</li>
            <li>Plus</li>
            <li>
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
                alt="Plus icon"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="Buynow-content">
        <div className="details-sec">
          <div className="login-signup">
            <span>1</span>
            <p>Login or Signup</p>
          </div>

          <div className="login-details">
            <div className="input-sec">
              <TextField
                id="standard-basic"
                label="Enter Email/Mobile number"
                variant="standard"
              />

              <div className="privacy-policy">
                <>By continuing, you agree to Flipkart's</>
                <span>Terms of Use</span>
                <>and</>
                <span>Privacy Policy.</span>
              </div>

              <button>Continue</button>
            </div>
            <div className="Rules-sec">
              <p>Advantages of our secure login</p>
              <ul>
                <li>
                  <FaTruck />
                  Easily Track Orders, Hassle free Returns
                </li>
                <li>
                  <FaBell />
                  Get Relevant Alerts and Recommendation
                </li>
                <li>
                  <MdStar />
                  Wishlist, Reviews, Ratings and more.
                </li>
              </ul>
            </div>
          </div>

          <div className="delivery-sec">
            <span>2</span>
            <p>Delivery Address</p>
          </div>
          <div className="ordersummary-sec">
            <span>3</span>
            <p>Order Summary</p>
          </div>
          <div className="payment-sec">
            <span>4</span>
            <p>Payment Options</p>
          </div>
        </div>
        <div className="secure-sec">
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/shield_5f9216.png"
            alt="Secure Logo"
          />
          <p>
            Safe and Secure Payments. Easy returns. 100% Authentic products.
          </p>
        </div>
      </div>

      <hr />

      <BuyNowFooter />
    </div>
  );
};

export default BuyNow;
