import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaGithub,  FaYoutube ,FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>

          <div className="contact-short-btn">
            <NavLink to="/">
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>

{/*  */}

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Technical Team</h3>
            <p>pranshu - GTE</p>
            <p>pranshu - DBA</p>
            <p>pranshu - SEO</p>
          </div>

{/* */}
          <div className="footer-subscribe">
            <h3>Subscribe please !</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

{/*  */}
          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div> <a href="https://github.com/explore"
                target="_blank">
                <FaGithub className="icons" />
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/pranshu-jaiswal-3b5323270"
                target="_blank">
                <FaLinkedin className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.youtube.com/watch?v=64a7hWMXqZQ"
                  target="_blank">
                  <FaYoutube className="icons" />
                </a>
              </div>
            </div>
          </div>

  {/* */}
          <div className="footer-contact">
            <h3>Call Me</h3>
            <h3>+91 9131858687</h3>
          </div>
        </div>

{/* */}
        <div className="footer-bottom--section">
        <hr />
          <div className="container grid grid-two-column">
            <p>
              @ kratin.co.&nbsp;&nbsp; All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-bottom--section {
      padding-top: 9rem;

      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }
  `;

  export default Footer;