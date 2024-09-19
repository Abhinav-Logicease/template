import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css';

const images = [
  "/assets/a.jpg",
  "/assets/a.jpg",
  "/assets/a.jpg",
];

const Login = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Disable arrows
  };

  return (
    <div className="container">
      <div className="background"></div>

      <div className="content">
        <div className="image-section">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="slide">
                <img src={image} className="image" alt={`slide-${index}`} />
                <div className="overlay-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nobis laboriosam ducimus autem fugiat ad laborum! Quae necessitatibus voluptatum itaque dolores ipsa! At a adipisci officiis veniam, nesciunt laborum minima!
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="text-section">
          <p className="title">Lovebirds</p>
          <div>
            <p>Welcome to Lovebirds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
