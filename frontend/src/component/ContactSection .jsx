import React, { useState } from "react";
import "../style/ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const googleFormActionURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSd9Zvh7cGkw6_JSsX1IECoIwcgPi0B6LmS0QmVYxIVcRyL03w/formResponse";

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new FormData object
    const formPayload = new FormData();
    formPayload.append("entry.1633920210", formData.name); // Replace with your Name field entry ID
    formPayload.append("entry.227649005", formData.email); // Replace with your Email field entry ID
    formPayload.append("entry.7900", formData.message); // Replace with your Message field entry ID

    // Submit the form using fetch
    fetch(googleFormActionURL, {
      method: "POST",
      body: formPayload,
      mode: "no-cors", // Necessary for Google Forms
    })
      .then(() => {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => alert("Error submitting the form: " + error.message));
  };

  return (
    <div className="contact-section">
      <h2 className="home_heading">Get in Touch Today</h2>
      <p className="home_subheading" style={{ marginTop: "2rem" }}>
        Partner with us for expert web development, digital marketing, and data
        analytics services designed to elevate your business. Let’s create
        solutions that drive success—tailored just for you.
      </p>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Contact Us Now and Start Your Journey!</h3>
          <p>
            <strong>Phone:</strong> +91 9786343389
          </p>
          <p>
            <strong>Email:</strong> info@innoversedigital.in
          </p>
          <p>
            <strong>Address:</strong> 12/24, Palayakara Street, Porur,
            Chennai-600116
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Enter your Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your first name here"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Enter your Email*</label>
            <input
              type="email"
              id="email"
              placeholder="Your email address here"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your message or inquiry*</label>
            <textarea
              id="message"
              placeholder="Type your message here"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit_button">
            Submit your information now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
