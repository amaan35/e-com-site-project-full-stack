import React from "react";
import { mainCarouselData } from "./MainCarouselData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = mainCarouselData.map((item, index) => {
  return (
    <img
      className="h-96 w-full object-contain pl-24 pr-24 bg-black"
      src={item.image}
    />
  );
});

const MainCarousel = () => {
  return (
    <div>
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
      />
    </div>
  );
};

export default MainCarousel;
