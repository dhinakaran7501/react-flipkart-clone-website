import React from "react";
import "./nested.scss";
import json from "../../../data.json";

const BankDetails = () => {
  let Datas = json.bank;
  return (
    <div className="BankDetails">
      <img src={Datas} alt="Bank-Details" />
    </div>
  );
};

export default BankDetails;
