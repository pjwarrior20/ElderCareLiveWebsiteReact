import React from "react";
import styled from "styled-components";


const HeroSection1 = () => {
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-image">
          <picture>
            <img src="./images/smilingwomen.jpg" alt="smilingwomen image" className="hero-img " />
          </picture>
        </div>

        <div className="section-hero-data">
          <h1 className="hero-heading">An Elder Care Service Where You Can ,</h1>
          <h1 className="hero-heading"> Trust!</h1>
          <p className="hero-para">
            We are on a mission 'To empower seniors to lead a happy and dignified life.' We deliver solutions to geriatric care challenges families face in metro cities.
          </p>
         
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

  .section-hero-image {
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
    max-width: 60rem;
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

export default HeroSection1;
