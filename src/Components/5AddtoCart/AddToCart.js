import React from "react";
import "./AddToCart.scss";
import NavbarAddtoCart from "./NavbarAddtoCart";
import { RiInformationFill } from "react-icons/ri";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  decreseQuantity,
  increaseQuantity,
  removeCartItem,
} from "../../Slice/Slice";

const AddToCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { addToCartObj } = useSelector((state) => state.AddtoCart);

  const packingFee = 69;

  const Price = addToCartObj.reduce((accumulator, currentItem) => {
    const productPrice = currentItem.price * currentItem.quantity;
    return accumulator + productPrice;
  }, 0);

  const discount = addToCartObj.reduce((accumulator, currentItem) => {
    const productDiscountPrice = currentItem.strikePrice - currentItem.price;
    return accumulator + Math.abs(productDiscountPrice * currentItem.quantity);
  }, 0);

  const totalPrice = Price - (discount - packingFee);

  function handlePay() {
    console.log(totalPrice);
    if (totalPrice <= 69) {
      alert("Enter the amount");
    } else {
      var options = {
        key: "rzp_test_jyHFaEV6Pwz7GJ",
        key_secret: "SYducCOj0iCIxoCkFaZZg0op",
        amount: totalPrice * 100,
        currency: "INR",
        name: "Flipkart",

        image:
          "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logo_lite-cbb357.png",
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: localStorage.getItem("Username"),
          email: localStorage.getItem("Email"),
          contact: "7550338725",
        },
        notes: {
          address: "Razorpay corporate office",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }

  return (
    <>
      <NavbarAddtoCart />
      <div className="AddToCart">
        <div className="content-sec">
          <div className="details-sec">
            <ul className="title-sec">
              <li className="active">
                Flipkart{" "}
                {addToCartObj.length > 1
                  ? `(${addToCartObj.length} items)`
                  : `(${addToCartObj.length} item)`}
              </li>
              <li>Grocery</li>
            </ul>
            <ul className="address-sec">
              <li>From Saved Addresses</li>
              <li>Enter Delivery Pincode</li>
            </ul>
            <div className="cart-sec">
              {addToCartObj.length >= 1 ? (
                addToCartObj.map((values, index) => (
                  <div className="product-Lists" key={index}>
                    <div className="row1">
                      <div className="img-sec">
                        <img src={values.imgURL} alt={values.name} />
                      </div>
                      <ul className="mobile-detail-sec">
                        <li>{values.name}</li>
                        <li>{values.RAM} GB RAM</li>
                        <li>Seller: Clostail</li>
                        <li>
                          <p>₹{values.strikePrice.toLocaleString()}</p>
                          <p>₹{values.price.toLocaleString()}</p>
                          <p>{values.offers}% Off</p>
                          <p>
                            1 offer applied <RiInformationFill />
                          </p>
                        </li>
                      </ul>
                      <ul className="delivery-sec">
                        <p>Delivery by Sun Dec 24</p>
                        <p>₹40</p>
                        <p>Free</p>
                      </ul>
                    </div>
                    <div className="row2">
                      <div className="button-sec">
                        <button
                          onClick={() =>
                            dispatch(decreseQuantity(values.mobId))
                          }
                        >
                          <FiMinus />
                        </button>
                        <p className="count">{values.quantity}</p>
                        <button
                          onClick={() =>
                            dispatch(increaseQuantity(values.mobId))
                          }
                        >
                          <FiPlus />
                        </button>
                      </div>
                      <p className="savelater">Save For Later</p>
                      <p
                        className="remove"
                        onClick={() => dispatch(removeCartItem(values.mobId))}
                      >
                        Remove
                      </p>
                    </div>
                    <hr className="producthr" />
                  </div>
                ))
              ) : (
                <div className="cart-empty">
                  <img
                    src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
                    alt="Cart Empty"
                  />
                  <p>Your cart is empty!</p>
                  <span>Add items to it now.</span>
                  <button onClick={() => navigate("/Flipkart")}>
                    Shop now
                  </button>
                </div>
              )}
            </div>
            <div className="place-order">
              <p onClick={handlePay}>Place Order</p>
            </div>
          </div>
          {addToCartObj.length >= 1 ? (
            <div className="right-sec">
              <div className="price-sec">
                <p>Price Details</p>
                <hr />
                <ul>
                  <li>
                    Price{" "}
                    {addToCartObj.length > 1
                      ? `(${addToCartObj.length} items)`
                      : `(${addToCartObj.length} item)`}
                    <span>₹{Price.toLocaleString()}</span>
                  </li>
                  <li>
                    Discount <span>- ₹{discount.toLocaleString()}</span>
                  </li>
                  <li>
                    Delivery Charges
                    <div>
                      <p>₹40</p>
                      <span>Free</span>
                    </div>
                  </li>
                  <li>
                    Secured Packaging Fee <span>₹{packingFee}</span>
                  </li>
                  <hr />
                  <li>
                    Total Amount <span>₹{totalPrice.toLocaleString()}</span>
                  </li>
                  <hr />
                  <li>
                    You will save ₹{(discount - packingFee).toLocaleString()} on
                    this order
                  </li>
                </ul>
              </div>
              <div className="secure-sec">
                <img
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/shield_b33c0c.svg"
                  alt="secure-logo"
                />
                <p>
                  Safe and Secure Payments.Easy returns.100% Authentic products.
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <hr className="footerhr" />

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
    </>
  );
};

export default AddToCart;
