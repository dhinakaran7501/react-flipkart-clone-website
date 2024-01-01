import React from "react";
import json from "../../../data.json";
import "./nested.scss";

const Advertisment2 = () => {
  const Datas = json.advertisment2;
  return (
    <div className="Advertisment">
      <ul>
        {Datas.map((values, index) => (
          <li key={values.id}>
            <img src={values.imgURL} alt="Ad images" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Advertisment2;
