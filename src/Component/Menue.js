import React, { useState, useEffect } from "react";
import axios from "axios";
import { ImageWrapper, Image, H2, Overlay } from "./Menuestyle";
import "./Menuestyle.css";
import { Link } from "react-router-dom";
import Scrolltotop from "./Scrolltotop";
import "./Scrolltotop.css";

const Menue = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios.get("./bb/data/data.json").then((res) => {
      setImages(res.data.mmenue);
    });
  }, []);

  const menueImages = images.map((imageItem) => {
    return (
      <div className="parent">
        <ImageWrapper key={imageItem.id} className="wrapper">
       <Link to={imageItem.link}>
            <Overlay />
            <Image src={imageItem.img} alt="" />

            <H2 className="H2">{imageItem.title}</H2>
          </Link>
        </ImageWrapper>
      </div>
    );
  });
  return (
    <div className="test">
      {menueImages}
      <Scrolltotop/>
    </div>
  );
};
export default Menue;
