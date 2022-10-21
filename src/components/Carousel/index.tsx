import React, { useState } from "react";
import { StringMap } from "../../services/types";
import LeftIcon from "../../assets/images/arrow_left.svg";
import RightIcon from "../../assets/images/arrow_right.svg";
import "./index.css";
import { CarouselItem } from "./CarouselItem";

type Props = {
  items: StringMap[];
};

function Carousel({ items }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const increaseIndex = () => {
    let newIndex = activeIndex + 1;
    if (newIndex < 0) {
      newIndex = items.length - 1;
    } else if (newIndex >= 5) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  const decreaseIndex = () => {
    let newIndex = activeIndex - 1;
    if (newIndex < 0) {
      newIndex = 4;
    } else if (newIndex >= 5) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <div className="indicators">
        <button
          onClick={() => decreaseIndex()}
          type="button"
          className="carousel-left"
        >
          <img src={LeftIcon} alt="Carousel Left Icon" />
        </button>
        <button
          onClick={() => increaseIndex()}
          type="button"
          className="carousel-right"
        >
          <img src={RightIcon} alt="Carousel Right Icon" />
        </button>
      </div>
      <div className="carousel">
        <div
          className="inner"
          style={{ transform: `translateX(-${activeIndex * 25}%)` }}
        >
          {items.map((item) => (
            <CarouselItem key={item.title} width="25%">
              <div>
                <img src={item.image} width={200} alt={item.title} />
                <h1>{item.title}</h1>
                <p>${item.price}</p>
              </div>
            </CarouselItem>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;

// return (
//   <div className="carousel-container">
//     <button type="button" className="carousel-left">
//       <img src={LeftIcon} alt="Carousel Left Icon" />
//     </button>
//     index
//     <button type="button" className="carousel-right">
//       <img src={RightIcon} alt="Carousel Right Icon" />
//     </button>
//   </div>
// );
