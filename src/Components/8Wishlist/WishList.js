import React from "react";
import "./WishList.scss";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdPower } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";
import Navbar from "../3Specific-individual-item/1Navbar";
import Footer from "../1StaticPages/2footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { wishListsDeleteItem } from "../../Slice/Slice";
import { useNavigate } from "react-router";
// import { useNavigate } from "react-router";

const WishList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { wishLists } = useSelector((state) => state.AddtoCart);

  function handlelogout() {
    localStorage.clear();
    navigate("/Login");
  }

  return (
    <>
      <Navbar />

      <div className="WishList">
        <div className="info-sec">
          <ul>
            <li>
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg"
                alt="Profile-img"
              />
            </li>
            <li>
              <p>Hello,</p>
              <p>{localStorage.getItem("Username")}</p>
            </li>
          </ul>

          <ul>
            <li>
              <div>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDE4Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04LjY5NCAtMTEpIj48ZWxsaXBzZSBjeD0iMjAuNTU3IiBjeT0iMjAiIHJ4PSIyMC41NTciIHJ5PSIyMCIvPjxwYXRoIGZpbGw9IiMyODc0RjEiIGQ9Ik05IDExdjE3LjEwOGMwIC40OTMuNDEuODkyLjkxOC44OTJoNC45M3YtNS4yNTdoLTMuMDMzbDQuOTEyLTQuNzcgNC45NzIgNC44M2gtMy4wMzVWMjloMTIuNDE3Yy41MDcgMCAuOTE4LS40LjkxOC0uODkyVjExSDl6Ii8+PC9nPjwvc3ZnPg=="
                  alt="My orders"
                />
                My Orders
              </div>
              <IoIosArrowForward />
            </li>
            <li>
              <div className="title">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIyIDIxIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjY5NCAtMTApIj48cGF0aCBmaWxsPSIjMjg3NEYwIiBkPSJNMTQuMjc1IDIyLjcwNGMyLjI3Mi0uNDEyIDQuMzQ3LS42MTggNi4yMjUtLjYxOCAxLjg3OCAwIDMuOTUzLjIwNiA2LjIyNS42MThhNS4xNSA1LjE1IDAgMCAxIDQuMjMgNS4wNjhWMzFoLTIwLjkxdi0zLjIyOGE1LjE1IDUuMTUgMCAwIDEgNC4yMy01LjA2OHptMS4yNzQtNy43MjRjMC0yLjU4IDIuMTYzLTQuNjczIDQuODMyLTQuNjczIDIuNjY3IDAgNC44MyAyLjA5MiA0LjgzIDQuNjczIDAgMi41OC0yLjE2MyA0LjY3My00LjgzIDQuNjczLTIuNjcgMC00LjgzMy0yLjA5Mi00LjgzMy00LjY3M3oiLz48ZWxsaXBzZSBjeD0iMjAuNTU3IiBjeT0iMjAiIHJ4PSIyMC41NTciIHJ5PSIyMCIvPjwvZz48L3N2Zz4="
                  alt="Account"
                />
                Account Settings
              </div>
              <div className="content">
                <p>Profile Information</p>
                <p>Manage Addresses</p>
                <p>PAN Card Information</p>
              </div>
            </li>
            <li>
              <div className="title">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIzIDIyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjY5NCAtOSkiPjxlbGxpcHNlIGN4PSIyMC41NTciIGN5PSIyMCIgcng9IjIwLjU1NyIgcnk9IjIwIi8+PHBhdGggZD0iTTcgNmgyOHYyOEg3eiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTMxLjUgMjd2MS4xNjdhMi4zNCAyLjM0IDAgMCAxLTIuMzMzIDIuMzMzSDEyLjgzM2EyLjMzMyAyLjMzMyAwIDAgMS0yLjMzMy0yLjMzM1YxMS44MzNBMi4zMzMgMi4zMzMgMCAwIDEgMTIuODMzIDkuNWgxNi4zMzRhMi4zNCAyLjM0IDAgMCAxIDIuMzMzIDIuMzMzVjEzSDIxYTIuMzMzIDIuMzMzIDAgMCAwLTIuMzMzIDIuMzMzdjkuMzM0QTIuMzMzIDIuMzMzIDAgMCAwIDIxIDI3aDEwLjV6TTIxIDI0LjY2N2gxMS42Njd2LTkuMzM0SDIxdjkuMzM0em00LjY2Ny0yLjkxN2MtLjk3IDAtMS43NS0uNzgyLTEuNzUtMS43NXMuNzgtMS43NSAxLjc1LTEuNzVjLjk2OCAwIDEuNzUuNzgyIDEuNzUgMS43NXMtLjc4MiAxLjc1LTEuNzUgMS43NXoiLz48L2c+PC9zdmc+"
                  alt="Account"
                />
                payments
              </div>
              <div className="content">
                <p>Gift Cards</p>
                <p>Saved UPI</p>
                <p>Saved Cards</p>
              </div>
            </li>
            <li>
              <div className="title">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIxOSIgdmlld0JveD0iMCAwIDIzIDE5Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyODc0RjAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIwLjUgMi43NWgtOUw5LjI1LjVIMi41QTIuMjQ3IDIuMjQ3IDAgMCAwIC4yNiAyLjc1bC0uMDEgMTMuNUEyLjI1NyAyLjI1NyAwIDAgMCAyLjUgMTguNWgxOGEyLjI1NyAyLjI1NyAwIDAgMCAyLjI1LTIuMjVWNWEyLjI1NyAyLjI1NyAwIDAgMC0yLjI1LTIuMjV6bS01LjYyNSAzLjM3NWEyLjI1NyAyLjI1NyAwIDAgMSAyLjI1IDIuMjUgMi4yNTcgMi4yNTcgMCAwIDEtMi4yNSAyLjI1IDIuMjU3IDIuMjU3IDAgMCAxLTIuMjUtMi4yNSAyLjI1NyAyLjI1NyAwIDAgMSAyLjI1LTIuMjV6bTQuNSA5aC05VjE0YzAtMS40OTYgMy4wMDQtMi4yNSA0LjUtMi4yNXM0LjUuNzU0IDQuNSAyLjI1djEuMTI1eiIvPjxwYXRoIGQ9Ik0tMi00aDI3djI3SC0yeiIvPjwvZz48L3N2Zz4="
                  alt="Account"
                />
                my stuff
              </div>
              <div className="content">
                <p>My Coupons</p>
                <p>My Reviews & Ratings</p>
                <p>All Notifications</p>
                <p className="active">My Wishlist</p>
              </div>
            </li>
            <li>
              <div className="title" onClick={handlelogout}>
                <IoMdPower />
                log out
              </div>
            </li>
          </ul>
        </div>
        {wishLists.length >= 1 ? (
          <div className="content-sec">
            <ul>
              <p className="wishListTitle">
                My Wishlist {wishLists ? `(${wishLists.length})` : ""}
              </p>
              {wishLists.map((values, index) => (
                <li key={index} className="cartSec">
                  <div className="cart-Content">
                    <div className="img-sec">
                      <img src={values.imgURL} alt={values.name} />
                    </div>
                    <ul className="content">
                      <li>{values.name}</li>
                      <li>
                        <p>
                          {values.ratingsStar} <MdOutlineStar />
                        </p>
                        <p>({values.ratingsCount.toLocaleString()})</p>
                        {values.flipkartAssure ? (
                          <img
                            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                            alt="fassured"
                          />
                        ) : (
                          ""
                        )}
                      </li>
                      <li>
                        <p>₹{values.price.toLocaleString()}</p>
                        <p>₹{values.strikePrice.toLocaleString()}</p>
                        <p>{values.offers}% off</p>
                      </li>
                    </ul>
                  </div>

                  <div className="delete-icon">
                    <MdDelete
                      onClick={() =>
                        dispatch(wishListsDeleteItem(values.mobId))
                      }
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="emptysec">
            <div className="cart-empty">
              <img
                src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
                alt="Cart Empty"
              />
              <p>Empty Wishlist</p>
              <span>You have no items in your wishlist. Start adding!</span>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default WishList;
