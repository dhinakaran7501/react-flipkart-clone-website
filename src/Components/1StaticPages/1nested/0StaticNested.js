import React from "react";
import "./nested.scss";
import Subnavbar from "./1Subnavbar";
import Carousel from "./2Carousel";
import BankDetails from "./3BankDetails";
import BestMobiles from "./4BestMobiles";
import BrandDirectory from "./BrandDirectory";
import Advertisment from "./5Advertisment";
import Advertisment2 from "./7Advertisment2";

const StaticNested = () => {
  return (
    <div className="StaticNested">
      <Subnavbar />
      <Carousel />
      <BankDetails />
      <BestMobiles />
      <Advertisment />
      <BestMobiles />
      <Advertisment2 />
      <BrandDirectory />
    </div>
  );
};

export default StaticNested;
