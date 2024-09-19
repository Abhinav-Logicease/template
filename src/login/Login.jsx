import React from 'react';
import './styles.css';

const Login = () => {
  return (
    <div className="container">
      <div className="background"></div>

      <div className="content">
        <div className="image-section">
          <img src="/assets/a.jpg" className="image" alt="background" />
          <div className="overlay-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nobis laboriosam ducimus autem fugiat ad laborum! Quae necessitatibus voluptatum itaque dolores ipsa! At a adipisci officiis veniam, nesciunt laborum minima!
          </div>
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
