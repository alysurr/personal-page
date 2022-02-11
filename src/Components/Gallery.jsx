import './Gallery.scss'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Image } from "semantic-ui-react";

const CustomDot = ({ active, onClick }) => {
  return (
    <li>
      <button
        className={`custom-dot ${active ? "custom-dot--active" : ""}`}
        onClick={() => onClick()}
      />
    </li>
  );
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};

const images = [
  "https://i.imgur.com/ddCMNtp.png",
  "https://i.imgur.com/hAi10Ed.jpg",
  "https://i.imgur.com/4YMu6l2.jpg",
  "https://i.imgur.com/TUEYxSP.jpg",
  "https://i.imgur.com/FFcYnUO.jpg",
  "https://i.imgur.com/9HfAuRN.jpg",
  "https://i.imgur.com/O5WmuBE.jpg",
  "https://i.imgur.com/PvtOrsE.jpg",
  "https://i.imgur.com/p3vRrup.jpg",
  "https://i.imgur.com/ihQFTpY.jpg",
  "https://i.imgur.com/1bJOREK.jpg",
  "https://i.imgur.com/tjUGos8.jpg",
  "https://i.imgur.com/qJA59id.jpg",
  "https://i.imgur.com/62x3N7w.jpg",
  "https://i.imgur.com/VQq4kx7.png",
  "https://i.imgur.com/uEPhLfN.png"
];

const Gallery = ({ deviceType }) => {
  return ( <div className="content">
    <Carousel
        className="gallery"
        ssr={true}
        partialVisbile
        deviceType={deviceType}
        itemClass="image-item"
        responsive={responsive}
        showDots={false}
        customDot={<CustomDot />}
      >
        {images.map(image => {
          return (
            <Image
              draggable={false}
              style={{
                width: "100%", 
                height: "100%", 
                objectFit: "cover"
              }}
              src={image}
            />
          );
        })}
      </Carousel>
  </div> )
};

export default Gallery;
