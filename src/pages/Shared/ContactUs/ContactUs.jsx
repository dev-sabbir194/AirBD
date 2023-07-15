import "./ContactUs.css";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { ImSkype } from "react-icons/im";
import SectionTitle from "../SectionTitle/SectionTitle";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <section className="contact-section" style={{ marginTop: "115px" }}>
      <div className="contact-image-container">
        <img
          src="https://drive.google.com/uc?id=1K153Qbrss-LxB2IXdA9lEV6wJYpNT0Pr "
          alt="Contact Background"
          className="contact-image"
        />
      </div>

      <div className="row justify-content-center section-title text-white mt-5">
        <SectionTitle
          heading="AirBD"
          subHeading="CONTUCT US"
          details=" Have a question, feedback, or need assistance? We're here to help! Our dedicated team is readily available to provide you with prompt support. Feel free to reach out to us via email, phone, or by visiting our office during business hours. We value your input and strive to ensure your satisfaction. Contact us today and let us assist you in any way we can.
"
        ></SectionTitle>
        <div className="section-title-dots text-center">
          <span style={{ background: "#6ca86a" }}></span>
          <span style={{ background: "#eca817" }}></span>
          <span style={{ background: "#3da2d8" }}></span>
          <span style={{ background: "#005374" }}></span>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3 className="contact-info-heading">Contact Information</h3>
          <hr />
          <hr />
          <p className="contact-info-text">
            <FaPhone /> Email : info@mail.com .
          </p>
          <hr />
          <p className="contact-info-text">
            <MdEmail /> Phone: +0124455555555{" "}
          </p>
          <hr />
          <p className="contact-info-text">
            <MdLocationOn /> Location: 120 Ghulshan, Dhaka, Bangladesh
          </p>
          <div className="mt-5 gap-4 d-flex justify-content-center social-svg">
            <div>
              <BsLinkedin />
            </div>
            <div>
              <FaFacebookSquare />
            </div>
            <div>
              <ImSkype />
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3 className="contact-form-heading">Get in Touch</h3>
          <div className="form-row gap-2">
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                className="form-input"
              />
            </div>
          </div>
          <div className="form-group">
            <textarea
              placeholder="Your Message"
              className="form-textarea"
            ></textarea>
          </div>
          <div className="form-row gap-2">
            <div className="form-group">
              <input type="file" className="form-file-input" />
            </div>
            <div className="form-group">
              <button type="submit" className="form-button">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
