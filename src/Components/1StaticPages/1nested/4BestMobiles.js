import React from "react";
import "./nested.scss";
import json from "../../../data.json";
import { MdOutlineChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { slicePassvalues } from "../../../Slice/Slice";

const BestMobiles = () => {
  const Datas = json.mobiles;
  const navigate = useNavigate();
  let dispatch = useDispatch();

  function handleitemlist(varities, mobileName) {
    navigate(`/ItemLists/${varities}/${mobileName}`);

    dispatch(slicePassvalues(mobileName));
  }

  return (
    <div className="BestMobiles">
      <div className="row-1">
        <p>Best Mobile</p>
        <MdOutlineChevronRight />
      </div>
      <div className="row-2">
        <ul>
          {Datas.map((values, index) => (
            <a
              onClick={() => handleitemlist(values.varities, values.mobileName)}
              key={values.id}
            >
              <img src={values.imgURL} alt={values.mobileName} />
              <p>{values.mobileName}</p>
              <p>{values.offers ? "incl of offers" : ""}</p>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BestMobiles;
