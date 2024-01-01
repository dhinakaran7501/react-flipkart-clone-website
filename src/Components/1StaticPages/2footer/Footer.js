import React from "react";
import "./footer.scss";
import { FaPlus } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="row row-1">
        <div className="col-2">
          <p className="title">ABOUT</p>
          <div className="content">
            <a>Contact Us</a>
            <a>About Us</a>
            <a>Careers</a>
            <a>Flipkart Stories</a>
            <a>Press</a>
            <a>Flipkart Wholesale</a>
            <a>Corporate Information</a>
          </div>
        </div>
        <div className="col-2">
          <p className="title">HELP</p>
          <div className="content">
            <a>Payments</a>
            <a>Shipping</a>
            <a>Cancellation & Returns</a>
            <a>FAQ</a>
            <a>Report Infringement</a>
          </div>
        </div>
        <div className="col-2">
          <p className="title">CONSUMER POLICY</p>
          <div className="content">
            <a>Return Policy</a>
            <a>Terms Of Use</a>
            <a>Security</a>
            <a>Privacy</a>
            <a>Sitemap</a>
            <a>Grievance Redressal</a>
            <a>EPR Compliance</a>
          </div>
        </div>
        <div className="col-2">
          <p className="title">SOCIAL</p>
          <div className="content">
            <a>Facebook</a>
            <a>Twitter</a>
            <a>YouTube</a>
          </div>
        </div>
        <div className="address-sec col-2">
          <p className="title">Mail Us:</p>
          <div>
            <p className="_1oQ-r6">Flipkart Internet Private Limited, </p>
            <p className="_1oQ-r6"> Buildings Alyssa, Begonia &amp; </p>
            <p className="_1oQ-r6"> Clove Embassy Tech Village, </p>
            <p className="_1oQ-r6">
              Outer Ring Road, Devarabeesanahalli Village,
            </p>
            <p className="_1oQ-r6"> Bengaluru, 560103, </p>
            <p className="_1oQ-r6"> Karnataka, India</p>
          </div>
        </div>
        <div className="col-2">
          <p className="title">Registered Office Address:</p>
          <div>
            <p className="_1oQ-r6">Flipkart Internet Private Limited, </p>
            <p className="_1oQ-r6"> Buildings Alyssa, Begonia &amp; </p>
            <p className="_1oQ-r6"> Clove Embassy Tech Village, </p>
            <p className="_1oQ-r6">
              Outer Ring Road, Devarabeesanahalli Village,
            </p>
            <p className="_1oQ-r6"> Bengaluru, 560103, </p>
            <p className="_1oQ-r6"> Karnataka, India </p>
            <p className="_1oQ-r6"> CIN : U51109KA2012PTC066107 </p>
            <p className="_1oQ-r6">
              Telephone: <a>044-45614700</a>
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="row-2">
        <div className="final-sec">
          <img
            src={
              "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg"
            }
            alt=""
          />
          <a>Become a Seller</a>
        </div>
        <div className="final-sec">
          <img
            src={
              "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-image-866c0b.svg"
            }
            alt=""
          />
          <a>Advertise</a>
        </div>
        <div className="final-sec">
          <img
            src={
              "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/gift-cards-image-d7ff24.svg"
            }
            alt=""
          />
          <a>Gift Cards</a>
        </div>
        <div className="final-sec">
          <img
            src={
              "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/help-centre-image-c4ace8.svg"
            }
            alt=""
          />
          <a>Help Center</a>
        </div>
        <div className="final-sec">
          <p>&copy;2007-2023 Flipkart.com</p>
        </div>
        <div className="final-sec">
          <img
            src={
              "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"
            }
            alt=""
          />
        </div>
      </div>

      <div className="mobile-view">
        <span>Flipkart - Your go-to place for Online Shopping</span>
        <span>
          <FaPlus />
        </span>
      </div>
    </div>
  );
};

export default Footer;
