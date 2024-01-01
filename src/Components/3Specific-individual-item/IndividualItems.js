import React from "react";
import "./IndividualItems.scss";
import Navbar from "./1Navbar";
import { useNavigate, useParams } from "react-router";
import json from "../../data.json";
import { IoIosHeart } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { BsFillLightningFill } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdShareAlt } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { GoInfo } from "react-icons/go";
import { IoStarSharp } from "react-icons/io5";
import { MdOutlineStarPurple500 } from "react-icons/md";
import Footer from "../1StaticPages/2footer/Footer";
import { useDispatch } from "react-redux";
import { sliceCartGetObjects } from "../../Slice/Slice";

const IndividualItems = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mobileName, RAM, ROM, mobileModel } = useParams();

  let Datas = json.mobiles;

  const find_Whole_Objects = Datas.find(
    (values) => mobileModel === values.mobileName
  );

  const find_mobile_Varities = find_Whole_Objects.mobileVarities;

  const find_Current_Object = find_mobile_Varities.find(
    (values) =>
      values.name === mobileName &&
      values.RAM === Number(RAM) &&
      values.ROM === Number(ROM)
  );

  const find_Mobile_Details = find_Current_Object.mobileDetails[0];

  function handleAddToCart(mobileName, variant, RAM) {
    dispatch(
      sliceCartGetObjects({
        mobileName: mobileName,
        variant: variant,
        RAM: RAM,
      })
    );
    navigate("/Add-to-Cart");
  }

  return (
    <>
      <Navbar />
      <div className="IndividualItems">
        <div className="img-sec">
          <div className="image">
            <ul className="image-col1">
              <li>
                <img
                  src={find_Mobile_Details.img1}
                  alt={find_mobile_Varities.name}
                />
              </li>
              <hr />
              <li>
                <img
                  src={find_Mobile_Details.img2}
                  alt={find_mobile_Varities.name}
                />
              </li>
              <hr />
              <li>
                <img
                  src={find_Mobile_Details.img3}
                  alt={find_mobile_Varities.name}
                />
              </li>
              <hr />
              <li>
                <img
                  src={find_Mobile_Details.img4}
                  alt={find_mobile_Varities.name}
                />
              </li>
              <hr />
              <li>
                <img
                  src={find_Mobile_Details.img5}
                  alt={find_mobile_Varities.name}
                />
              </li>
            </ul>
            <div className="image-col2">
              <img
                src={find_Mobile_Details.img1}
                alt={find_mobile_Varities.name}
              />
              <div className="favourite-icon">
                <IoIosHeart />
              </div>
            </div>
          </div>
          <div className="button">
            <p
              onClick={() =>
                handleAddToCart(
                  find_Whole_Objects.mobileName,
                  find_Current_Object.name,
                  find_Current_Object.RAM
                )
              }
            >
              <IoCart /> Add to Cart
            </p>
            <p onClick={() => navigate("/BuyNow")}>
              <BsFillLightningFill />
              Buy Now
            </p>
          </div>
        </div>
        <div className="details-sec">
          <div className="file-path">
            <ul className="path">
              <li>
                Home <MdKeyboardArrowRight />
              </li>

              <li>
                {find_Whole_Objects.varities} <MdKeyboardArrowRight />
              </li>
              <li>
                Mobiles <MdKeyboardArrowRight />
              </li>
              <li>
                Nothing Mobiles <MdKeyboardArrowRight />
              </li>
              <li>{find_Whole_Objects.mobileName}</li>
            </ul>
            <ul className="share_compare">
              <li>
                <input type="checkbox" id="" />
                <span>Compare</span>
              </li>
              <li>
                <IoMdShareAlt />
                <span>Share</span>
              </li>
            </ul>
          </div>

          <div className="mobileName-sec">
            <p>{find_Current_Object.name}</p>
            <p>( {find_Current_Object.RAM} GB RAM )</p>
          </div>

          <div className="ratings-sec">
            <span>
              4.4 <IoMdStar />
            </span>
            <span>
              {find_Current_Object.ratingsCount.toLocaleString()} Ratings{" "}
            </span>

            <span>
              &amp; {find_Current_Object.reviews.toLocaleString()} Reviews
            </span>
            {find_Current_Object.flipkartAssure ? (
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                alt="fassuredLogo"
              />
            ) : (
              ""
            )}
          </div>

          <div className="extra-amount">
            <p>{`Extra ₹${
              find_Current_Object.strikePrice - find_Current_Object.price
            } off`}</p>
          </div>

          <ul className="price-sec">
            <li>₹{find_Current_Object.price.toLocaleString()}</li>
            <li>₹{find_Current_Object.strikePrice.toLocaleString()}</li>
            <li>{find_Current_Object.offers}% off</li>
            <GoInfo />
          </ul>

          <div className="secure-package">
            <span>
              + ₹{find_Mobile_Details.securedPackingFee} Secured Packaging Fee
            </span>
          </div>

          <div className="available-offers">
            <p className="avail-off">Available Offers</p>
            <ul>
              <li>
                <img
                  src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  alt="Tag-name"
                />
                <p>Bank Offer</p>
                <p>{find_Mobile_Details.BankOffers1}</p>
                <p>T&amp;C</p>
              </li>
              <li>
                <img
                  src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  alt="Tag-name"
                />
                <p>Bank Offer</p>
                <p>{find_Mobile_Details.BankOffers2}</p>
                <p>T&amp;C</p>
              </li>
              <li>
                <img
                  src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  alt="Tag-name"
                />
                <p>Bank Offer</p>
                <p>{find_Mobile_Details.BankOffers3}</p>
                <p>T&amp;C</p>
              </li>
              <li>
                <img
                  src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  alt="Tag-name"
                />
                <p>Special Price</p>
                <p>{find_Mobile_Details.specialPrice}</p>
                <p>T&amp;C</p>
              </li>
            </ul>
            <p className="offersCount">
              View {find_Mobile_Details.offersCount} more offer
            </p>
          </div>

          <div className="warranty-sec">
            <img src={find_Mobile_Details.logo} alt="Nothing Logo" />
            <p>1 Year Manufacturing Warranty</p>
            <p>Know More</p>
          </div>

          <div className="highlights-sec">
            <p>Highlights</p>
            <ul>
              <li>{find_Current_Object.li1}</li>
              <li>{find_Current_Object.li2}</li>
              <li>{find_Current_Object.li3}</li>
              <li>{find_Current_Object.li4}</li>
              {find_Current_Object ? "" : <li>{find_Current_Object.li5}</li>}
              <li>{find_Current_Object.li6}</li>
            </ul>
          </div>

          <div className="ratings-reviews-sec">
            <div className="title-sec">
              <p>Ratings &amp; reviews</p>
              <p>Rate Product</p>
            </div>
            <div className="ratings-reviews">
              <ul>
                <li>
                  {find_Current_Object.ratingsStar} <IoStarSharp />
                </li>
                <li>
                  {find_Current_Object.ratingsCount.toLocaleString()} Ratings
                  &amp;
                </li>
                <li>{find_Current_Object.reviews.toLocaleString()} Reviews</li>
              </ul>
              <ul>
                <li>
                  <div className="star">
                    5<MdOutlineStarPurple500 />
                  </div>
                  <div className="bar-sec">
                    <p className="bar-5-star"></p>
                  </div>
                  <p>{find_Mobile_Details._5star.toLocaleString()}</p>
                </li>
                <li>
                  <div className="star">
                    4<MdOutlineStarPurple500 />
                  </div>
                  <div className="bar-sec">
                    <p className="bar-4-star"></p>
                  </div>
                  <p>{find_Mobile_Details._4star.toLocaleString()}</p>
                </li>
                <li>
                  <div className="star">
                    3<MdOutlineStarPurple500 />
                  </div>
                  <div className="bar-sec">
                    <p className="bar-3-star"></p>
                  </div>
                  <p>{find_Mobile_Details._3star.toLocaleString()}</p>
                </li>
                <li>
                  <div className="star">
                    2<MdOutlineStarPurple500 />
                  </div>
                  <div className="bar-sec">
                    <p className="bar-2-star"></p>
                  </div>
                  <p>{find_Mobile_Details._2star.toLocaleString()}</p>
                </li>
                <li>
                  <div className="star">
                    1<MdOutlineStarPurple500 />
                  </div>
                  <div className="bar-sec">
                    <p className="bar-1-star"></p>
                  </div>
                  <p>{find_Mobile_Details._1star.toLocaleString()}</p>
                </li>
              </ul>
              <hr />
              <ul>
                <li>
                  <div className="features-ratings">
                    <p>
                      <span>
                        {find_Mobile_Details.camera > 4 ||
                        find_Mobile_Details.camera > 3
                          ? find_Mobile_Details.camera
                          : `${find_Mobile_Details.camera}.0`}
                      </span>
                    </p>
                  </div>
                  <p>Camera</p>
                </li>
                <li>
                  <div className="features-ratings">
                    <p>
                      <span>
                        {find_Mobile_Details.battery > 4 ||
                        find_Mobile_Details.battery > 3
                          ? `${find_Mobile_Details.battery}`
                          : `${find_Mobile_Details.battery}.0`}
                      </span>
                    </p>
                  </div>
                  <p>Battery</p>
                </li>
                <li>
                  <div className="features-ratings">
                    <p>
                      <span>
                        {find_Mobile_Details.display > 4 ||
                        find_Mobile_Details.display > 3
                          ? find_Mobile_Details.display
                          : `${find_Mobile_Details.display}.0`}
                      </span>
                    </p>
                  </div>
                  <p>Display</p>
                </li>
                <li>
                  <div className="features-ratings">
                    <p>
                      <span>
                        {find_Mobile_Details.design > 4 ||
                        find_Mobile_Details.design > 3
                          ? find_Mobile_Details.design
                          : `${find_Mobile_Details.design}.0`}
                      </span>
                    </p>
                  </div>
                  <p>Design</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IndividualItems;
