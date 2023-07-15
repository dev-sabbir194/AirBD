import { Container, Row, Col } from "react-bootstrap";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="header">
      <div className="service d-flex gap-2 flex-wrap align-items-center justify-content-center pt-5 pb-2 ">
        <div className="center-content py-1">
          <h3 className="company-text">AirBD</h3>
          <div className="section-title-dots text-left">
            <span style={{ background: "#6ca86a" }}></span>
            <span style={{ background: "#eca817" }}></span>
            <span style={{ background: "#3da2d8" }}></span>
            <span style={{ background: "#005374" }}></span>
          </div>
          <h1 className="fancy-heading">WHY CHOOSE US</h1>

          <Container className="mb-5">
            <Row>
              <Col
                style={{ borderRight: "1px dotted #000" }}
                xs={12}
                md={12}
                lg={6}
                xl={6}
                className="sizeing"
              >
                <div className="d-flex gap-2">
                  <div>
                    {" "}
                    <img
                      src="https://cdn.colorexpertsbd.com/wp-content/uploads/2022/01/icon-user-star.png"
                      alt=""
                    />
                  </div>
                  <div>
                    {" "}
                    <h4>30+ Years</h4>
                    <p> of Experience</p>
                  </div>
                </div>
              </Col>
              <Col
                style={{ borderBottom: "1px dotted #000" }}
                xs={12}
                md={12}
                lg={6}
                xl={6}
              >
                <div className="d-flex gap-2">
                  <div>
                    {" "}
                    <img
                      src="https://cdn.colorexpertsbd.com/wp-content/uploads/2022/01/icon-security.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <h4>BBB</h4>
                    <p> Accedited</p>
                  </div>
                </div>
              </Col>

              <Col
                style={{
                  borderRight: "1px dotted #000",
                  borderTop: "1px dotted #000",
                  marginTop: "-1px",
                }}
                xs={12}
                md={12}
                lg={6}
                xl={6}
              >
                <div className="d-flex gap-2" style={{ marginTop: "20px" }}>
                  <div>
                    {" "}
                    <img
                      src="https://cdn.colorexpertsbd.com/wp-content/uploads/2022/01/icon-user-circle.png"
                      alt=""
                    />
                  </div>
                  <div>
                    {" "}
                    <h4>250+ Creative</h4>
                    <p> Designers</p>
                  </div>
                </div>
              </Col>
              <Col
                style={{ marginTop: "20px" }}
                xs={12}
                md={12}
                lg={6}
                xl={6}
                className="sizeing"
              >
                <div className="d-flex gap-2">
                  <div>
                    <img
                      src="https://cdn.colorexpertsbd.com/wp-content/uploads/2022/01/icon-headphone.png"
                      alt=""
                    />
                  </div>
                  <div>
                    {" "}
                    <h4>24/7</h4>
                    <p>Support</p>
                  </div>
                </div>
              </Col>
            </Row>

            <Link to="/getaquote">
         
              <button className="button  " id="first-trial">
                GET YOUR FIRST TRIAL
              </button>
            </Link>
          </Container>
        </div>
        <div className="center-content ">
          <h3 className="company-text">AirBD</h3>
          <div className="section-title-dots text-left">
            <span style={{ background: "#6ca86a" }}></span>
            <span style={{ background: "#eca817" }}></span>
            <span style={{ background: "#3da2d8" }}></span>
            <span style={{ background: "#005374" }}></span>
          </div>
          <h1 className="fancy-heading"> OUR SERVICES</h1>

          <Container className="second-container">
            <Row>
              <Col
                style={{ marginBottom: "10px" }}
                xs={12}
                md={12}
                lg={6}
                xl={6}
              >
                <div className="col-style card-1 d-flex  justify-content-between">
                  <p>Clipping Path</p>
                  <img
                    className="service-img"
                    src="https://cdn.colorexpertsbd.com/wp-content/uploads/2022/01/icon_product_clipping.png"
                    alt=""
                  />
                </div>
              </Col>
              <Col
                style={{ marginBottom: "10px" }}
                xs={12}
                md={12}
                lg={6}
                xl={6}
              >
                <div className="col-style card-2 d-flex justify-content-between">
                  <p>Image Masking</p>
                  <img
                    className="service-img"
                    src="https://cdn.colorexpertsbd.com/wp-content/uploads/2022/01/icon_image_masking.png"
                    alt=""
                  />
                </div>
              </Col>
              <Col
                style={{ marginBottom: "10px" }}
                xs={12}
                md={12}
                lg={6}
                xl={6}
              >
                <div className="col-style card-3 d-flex justify-content-between">
                  <p>Image Retouching</p>
                  <img
                    className="service-img"
                    src="https://cdn.colorexpertsbd.com/wp-content/uploads/2022/01/icon_image_retouching.png"
                    alt=""
                  />
                </div>
              </Col>
              <Col
                style={{ marginBottom: "10px" }}
                xs={12}
                md={12}
                lg={6}
                xl={6}
              >
                <div className="col-style card-4 d-flex justify-content-between">
                  <p>Ghost Mannequin</p>
                  <img
                    className="service-img"
                    src="https://cdn.colorexpertsbd.com/wp-content/uploads/2022/01/icon_ghost_mannequin.png"
                    alt=""
                  />
                </div>
              </Col>
            </Row>
            <Link to="/services">
              <button className="button  " id="more-service">
                CHECK FOR MORE SERVICES
              </button>
            </Link>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Banner;
