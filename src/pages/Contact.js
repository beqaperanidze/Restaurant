import React from "react";
import "../styles/Contact.css";
import Banner from "../assets/AboutImage.jpg";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Banner})` }}
      ></div>

      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" methon="POST">
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            placeholder="Enter full name"
            type="text"
            required
          />
          <label htmlFor="name">Email</label>
          <input name="name" placeholder="Enter email" type="email" required />
          <label htmlFor="message">Message</label>
          <textarea
            rows={6}
            placeholder="Enter message"
            name="message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
