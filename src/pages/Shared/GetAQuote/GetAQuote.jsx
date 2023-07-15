
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { ImSkype } from "react-icons/im";
import SectionTitle from "../SectionTitle/SectionTitle";

const GetAQuote = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <section className="contact-section" style={{ marginTop: "115px" }}>
      <div className="contact-image-container">
        <img
          src="https://drive.google.com/uc?id=14gKh2KT17rZpQVcqVeFpHduelfy8tz3v"
          alt="Contact Background"
          className="contact-image"
        />
      </div>

      <div className="row justify-content-center section-title text-white mt-5">
        <SectionTitle
          heading="AirBD"
          subHeading="GET A QUOTE"
          details=" Are you ready to take your images to the next level? Request a quote from us today and discover how our professional photo editing services can enhance your visuals. Whether you need background removal, retouching, color correction, or any other editing service, our team of skilled editors is ready to transform your images with precision and attention to detail. We offer competitive pricing and quick turnaround times, ensuring you receive high-quality results that meet your specific requirements. Simply provide us with your project details, and we'll provide you with a personalized quote tailored to your needs. Don't settle for ordinary images when you can have extraordinary visuals with our expert photo editing services. Contact us now and let's bring your vision to life.
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

export default GetAQuote;
