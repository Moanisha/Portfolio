import React, { useState } from "react";
import "./Contact.css"; // Import CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import contact1 from "./../Assets/contact1.png";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailAddress = "moanisha94@gmail.com";
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(content)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-me-container">
      <div className="contact-me">
        <div className="left-panel">
          <div className="profile">
            <img src={contact1} alt="Profile" />
          </div>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/moanisha-velayuthem/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.instagram.com/moa_nisha_v"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <div className="right-panel">
          <form onSubmit={handleSubmit} className="contact-form">
            <h2>Contact</h2>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">Content:</label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
