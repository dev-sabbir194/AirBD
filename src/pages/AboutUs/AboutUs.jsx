
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const AboutUs = () => {
    return (
      <div className="">
        <section className="contact-section" style={{ marginTop: "115px" }}>
          <div className="contact-image-container" style={{ width: "100%" }}>
            <img
              src="https://drive.google.com/uc?id=11vnCg26pcJDPSn3T6jzTSfgPmbFHHWCS"
              alt="Contact Background"
              className="contact-image"
            />
          </div>
        </section>
        <div className="row justify-content-center section-title">
          <SectionTitle
            heading="AirBD"
            subHeading="About Us"
            details=" AirBD,is a renowned photo manipulation and graphic design service provider with over 15 years of experience in the image editing industry. AirBD serves top global brands such as Adidas, Nike, Puma, Apple, Samsung, Tommy Hilfiger, Hugo Boss, and more. The company offers simple yet effective solutions to photographers, e-commerce companies, advertising agencies, web design companies, magazine publishers, printing companies, and other clients."
          />
          <div className="section-title-dots text-center">
            <span style={{ background: "#6ca86a" }}></span>
            <span style={{ background: "#eca817" }}></span>
            <span style={{ background: "#3da2d8" }}></span>
            <span style={{ background: "#005374" }}></span>
          </div>
        </div>
        <Container>
          <Row className="mt-3">
            <Col xs={12} className="text-center">
              <h3>Our Team</h3>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={12} md={6} className="text-center">
              <img
                src=" https://drive.google.com/uc?id=1uyIHwYVX2cJj5jPvfOhqQJJlQtQPOPxw"
                alt="Team Member 1"
                className="img-fluid"
              />
              <h4>John Doe</h4>
              <p>Co-Founder</p>
            </Col>
            <Col xs={12} md={6} className="text-center">
              <img
                src=" https://drive.google.com/uc?id=1uyIHwYVX2cJj5jPvfOhqQJJlQtQPOPxw"
                alt="Team Member 2"
                className="img-fluid"
              />
              <h4>Jane Smith</h4>
              <p>Co-Founder</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default AboutUs;
