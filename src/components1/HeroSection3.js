import React from "react";
import styled from "styled-components";

import { Button } from "../styles/Button";

const HeroSection3 = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="section section-hero-image">
          <picture>
            <img src="./images/food.jpg" alt="hero image" className="hero-img " />
          </picture>
        </div>

        <div className="section section-hero-image">
          <picture>
            <img src="./images/exercise.jpg" alt="hero image" className="hero-img " />
          </picture>
        </div>

        <div className="section section-hero-data">
          <h1 className="hero-heading">!</h1>
          <p className="hero-para">A healthy diet is important for individuals
           to support 
          overall health and well-being. Here's some key information regarding their diet
          </p>
          <p>click for video</p>
          <div className="button-container">
          <a
                  href="https://www.youtube.com/watch?v=H0HdTpIzGYI"
                  target="_blank">
            <Button className="btn hireme-btn">
            click me
            </Button>
            </a>
            
          </div>
        </div>

        <div className="section section-hero-data">
          <h1 className="hero-heading">!</h1>
          <p className="hero-para">
          Regular exercise is crucial  to maintain their physical health and overall well-being. Here's some key information regarding exercise for this age group
          </p>
          <p>click for video</p>
          <div className="button-container">
          <a
                  href="https://www.youtube.com/watch?v=Ev6yE55kYGw"
                  target="_blank">
            <Button className="btn hireme-btn">
            click me
            </Button>
            </a>
           
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .section {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 75%;
  }

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 4.4rem;
    
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 40rem;
  }

  .button-container {
    display: flex;
    gap: 10px; /* Adjust this value for spacing between the buttons */
    margin-top: 2rem;
  }

  .btn {
    max-width: 16rem;
  }
`;

export default HeroSection3;
