import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";

const HeroSection2 =()=>{
 return(
    <Wrapper>
   <div className="container grid grid-two-column">

   <div className="section-hero-data">
       
   <h className="hero-heading">We Provide</h>
   <p className="hero-para"></p>
   <p className="hero-para">1. PHYSIOTHERAPY</p>
   <p className="hero-para">2. diet plan</p>
   <p className="hero-para">3. EXRECISE PLAN</p>
   <p className="hero-para">4. FINANCIAL PLANNIG</p>
   <p className="hero-para">5. HELP IN MEDICAL SUPPORT</p>

   
       

   </div>
     
   <div className="section-hero-image">
       <picture>
         <img src="./images/smilingwomen2.jpg" alt="hesmilingwomenro image" className="hero-img " />
       </picture>
     </div>

</div>
    </Wrapper>
 );

};
const Wrapper =styled.section`
padding: 9rem 0;

.section-hero-data {
 display: flex;
 flex-direction: column;
 justify-content: center;
 
}
.btn {
 max-width: 16rem;
 margin-right: 10px; 
 justify-content: center;
 
}
.hero-top-data {
 text-transform: uppercase;
 font-weight: 500;
 font-size: 1.5rem;
 color: ${({ theme }) => theme.colors.helper};
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
.section-hero-image {
 display: flex;
 justify-content: center;
 align-items: right;
}
picture {
 
 text-align: center;
}
.hero-img {
 max-width: 75%;

}

`;
export default HeroSection2;