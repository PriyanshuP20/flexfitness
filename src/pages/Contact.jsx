import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import './Contact.css';
const Contact =()=> {
  
    return(
    <>
    <div class="contact-form-container">
  <div class="contact-us">
    <div class="contact-header">
      <h1>
        &#9135;&#9135;&#9135;&#9135;&nbsp;&nbsp;CONTACT US
      </h1>
    </div>
    <div class="social-bar">
      <ul>
        <li>
          <i class="fab fa-facebook-f"></i>
        </li>
        <li>
          <i class="fab fa-twitter"></i>
        </li>
        <li>
          <i class="fab fa-instagram"></i>
        </li>
        <li>
          <i class="fab fa-dribbble"></i>
        </li>
      </ul>
    </div>
  </div>
  <div class="header">
    <h1>
      Let's Get Started
    </h1>
    <h2>
      Reach out to us for any queries and help.
    </h2>
  </div>
  {/* <div class="address">
    <i class="fas fa-map-marker-alt"></i>
    <h3>
      8266 Gygax
    </h3>
    <h3>
      Norfolk, VA
    </h3>
  </div> */}
  <div class="phone">
    <i class="fas fa-phone-alt"></i>
    <h3>
      Contact: 7200000091
    </h3>
  </div>

  <div class="email">
    <i class="fas fa-envelope"></i>
    <h3>
      Email: hello@flexfitness.com
    </h3>
  </div>
  <div class="contact-form">
  <form target="_blank" action="https://formsubmit.co/priyanshupatel007@gmail.com" method="POST">
      <input placeholder="Name" type="text" name="name"/>
      <input placeholder="Email" type="email" name="Email"/>
      <textarea placeholder="Tell us about your project..." rows="4" name="text"></textarea>
      <button type="submit">SEND </button>
    </form>
  </div>
</div>
</>
    );
};
export default Contact;
