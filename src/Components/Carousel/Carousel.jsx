import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { img } from './img/data';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from './Carousel.module.css';

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={true}
        showThumbs={false}  // Hide thumbs if you don't want them
      >
        {img.map((imageItemLink) => (
          <div key={imageItemLink} className={classes.carousel__image__container}>
            <img src={imageItemLink} className={classes.carousel__image} alt="carousel" />
          </div>
        ))}
      </Carousel>

      <div className={classes.hero__image}></div>
    </div>
  );
}

export default CarouselEffect;
