import React from "react";
import json from "../../../data.json";

const Subnavbar = () => {
  let Datas = json.subnavbar;
  return (
    <div className="Subnavbar">
      <div className="content-sec">
        {Datas.map((values, index) => (
          <li key={values.id}>
            <img src={values.imgURL} alt={values.title} />
            <span>{values.title}</span>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Subnavbar;
