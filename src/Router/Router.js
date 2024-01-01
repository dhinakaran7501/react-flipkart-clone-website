import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Components/1StaticPages/0navbar/Navbar";
import DynamicNavbar from "../Components/2Specific-All-items/1navbar/DynamicNavbar";
import IndividualItems from "../Components/3Specific-individual-item/IndividualItems";
import BuyNow from "../Components/4BuyNow/BuyNow";
import AddToCart from "../Components/5AddtoCart/AddToCart";
import Login from "../Components/6Login/Login";
import Signup from "../Components/7signup/Signup";
import WishList from "../Components/8Wishlist/WishList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Flipkart" element={<Navbar />} />
        <Route
          path="/ItemLists/:varities/:mobileName"
          element={<DynamicNavbar />}
        />
        <Route
          path="/MobileDetails/:mobileModel/:mobileName/:RAM/:ROM"
          element={<IndividualItems />}
        />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/BuyNow" element={<BuyNow />} />
        <Route path="/Add-to-Cart" element={<AddToCart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
