import React from "react";
import styled from "styled-components";


const HeroSection5 = () => {
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-image">
          <picture>
            <img src="./images/byy.jpg" alt="byy image" className="hero-img " />
          </picture>
        </div>

        <div className="section-hero-data">
          <h1 className="hero-heading">About Elders Care App,</h1>
          
          <p className="hero-para">
          The Elders Care app is designed to provide comprehensive support and assistance to senior citizens, ensuring their well-being and quality of life. With a user-friendly interface, the app offers a range of features to enhance the lives of elders and their caregivers.
          </p>


          <p>
         <h2> Features   included: </h2>
         
           <h4> - Access to curated resources for senior health, wellness, and lifestyle. </h4>
            <br></br>
           <h4> - Communication tools to connect with family, friends, and caregivers.  </h4>
            </p>




 <br></br>
            
<br></br>

<br></br>
          <p>
         <h2> Features  about to include:</h2>
            <h4>- Personalized health tracking and reminders for medications and appointments.</h4>
            <br></br>
            <h4> -Emergency contact and SOS functionality for immediate assistance.</h4>
            <br></br>
           < h4> - Social engagement through community forums and event listings.</h4>
           <br></br>
           <h4> - Access to curated resources for senior health, wellness, and lifestyle. </h4>
            <br></br>
           <h4> - Communication tools to connect with family, friends, and caregivers.  </h4>
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

export default HeroSection5;
