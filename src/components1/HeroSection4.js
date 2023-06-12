import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";

const HeroSection4 = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="section section-hero-image">
          <picture>
            <img src="./images/finance.jpg" alt="finance" className="hero-img " />
          </picture>
        </div>

        <div className="section section-hero-image">
          <picture>
            <img src="./images/medical.jpg" alt="medical" className="hero-img " />
          </picture>
        </div>

        <div className="section section-hero-data">
          <h1 className="hero-heading">!</h1>
          <p className="hero-para">
          It's important for older individuals to plan ahead, seek professional financial advice if needed, and regularly review and adjust their financial strategies to ensure their financial well-being in retirement
          </p>
          <div className="button-container">
            <Button className="btn hireme-btn">
              <NavLink to="/First">click me</NavLink>
            </Button>
           
          </div>
        </div>

        <div className="section section-hero-data">
          <h1 className="hero-heading">!</h1>
          <p className="hero-para">individual medical needs can vary, so it's important to consult with your healthcare provider for personalized advice and recommendations regarding medication management and regular checkups
          </p>
          <div className="button-container">
            <Button className="btn hireme-btn">
              <NavLink to="/Third">click me</NavLink>
            </Button>
            
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

export default HeroSection4;
