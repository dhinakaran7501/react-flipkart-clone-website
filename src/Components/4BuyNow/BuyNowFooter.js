import React from "react";
import "./BuyNow.scss";

const BuyNowFooter = () => {
  return (
    <div className="Buynow-footer">
      <div className="policies">
        <span>Policies:</span>
        <ul>
          <li>Returns Policy</li>
          <li>Terms of use</li>
          <li>Security</li>
          <li>Privacy</li>
          <li>Infringement</li>
        </ul>
        <p>© 2007-2023 Flipkart.com</p>
      </div>

      <div className="needHelp">
        <>Need help? </>
        <>Visit the</>
        <span>Help Center</span>
        <>or</>
        <span>Contact Us</span>
      </div>
    </div>
  );
};

export default BuyNowFooter;
