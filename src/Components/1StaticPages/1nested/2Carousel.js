import React, { useState } from "react";
import "./nested.scss";
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";

const Carousel = () => {
  const filepath = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpeg",
    "img4.jpg",
    "img5.jpeg",
    "img6.jpg",
  ];

  const [count, setcount] = useState(0);

  function handleprevious() {
    count <= 0 ? setcount(filepath.length - 1) : setcount(count - 1);
  }

  function handlenext() {
    count >= filepath.length - 1 ? setcount(0) : setcount(count + 1);
  }

  return (
    <div className="Carousel">
      <button onClick={handleprevious}>
        <MdChevronLeft />
      </button>
      <img
        src={`../../images/1carousel/${filepath[count]}`}
        alt="carousel-img"
      />
      <button onClick={handlenext}>
        <MdChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
