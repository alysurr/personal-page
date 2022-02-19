import './Gallery.scss'
import React from 'react'
import PT from "prop-types";
import {
  LightgalleryProvider,
  LightgalleryItem,
  withLightgallery,
  useLightgallery
} from "react-lightgallery";

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

const PhotoItem = ({ image, thumb, group }) => (
  <div style={{ maxWidth: "250px", width: "200px", padding: "5px" }}>
    <LightgalleryItem group={group} src={image} thumb={thumb}>
      <img src={image} style={{ width: "100%" }} />
    </LightgalleryItem>
  </div>
);
PhotoItem.propTypes = {
  image: PT.string.isRequired,
  thumb: PT.string,
  group: PT.string.isRequired
};
export default function Gallery() {
  
  return (
    <div>
      <LightgalleryProvider
    onBeforeOpen={() => console.info("onBeforeOpen")}
    onAfterOpen={() => console.info("onAfterOpen")}
    onSlideItemLoad={() => console.info("onSlideItemLoad")}
    onBeforeSlide={() => console.info("onBeforeSlide")}
    onAfterSlide={() => console.info("onAfterSlide")}
    onBeforePrevSlide={() => console.info("onBeforePrevSlide")}
    onBeforeNextSlide={() => console.info("onBeforeNextSlide")}
    onDragstart={() => console.info("onDragstart")}
    onDragmove={() => console.info("onDragmove")}
    onDragend={() => console.info("onDragend")}
    onSlideClick={() => console.info("onSlideClick")}
    onBeforeClose={() => console.info("onBeforeClose")}
    onCloseAfter={() => console.info("onCloseAfter")}
  >

  <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    {images.map((p, idx) => (
      <PhotoItem key={idx} image={p} group="group2" />
    ))}
  </div>
  </LightgalleryProvider>
  </div>
  )
}
