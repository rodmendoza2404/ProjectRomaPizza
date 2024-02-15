import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {

  function getData() {
    alert("Your request has been sent");
  }

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <label htmlFor="name">Full Name</label>
        <input id="name" name="name" placeholder="Enter full name..." type="text" />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="Enter email..." />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows="6"
          placeholder="Enter message..."
          name="message"
          required
        ></textarea>
        <button type="button" onClick={getData}> Send Message</button>
      </div>
    </div>
  );
}

export default Contact;
