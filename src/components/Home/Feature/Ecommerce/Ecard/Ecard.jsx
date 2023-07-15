import { Container, Row, Col } from "react-bootstrap";
const Ecard = () => {
  return (
    <div className="e-card">
      <div className="feature-section pb-5">
        <Container className="mb-5">
          <Row>
            <Col xs={12} md={4}>
              <div className="feature">
                <div className="image-container">
                  <img
                    className="img-fluid"
                    style={{ height: "250px" }}
                    src="https://drive.google.com/uc?id=1ScoEW6k7Am34xgZr2mX9kVxGJSn_pwEY"
                    alt=""
                  />
                </div>
                <h3 className="text-center feature-title">
                  Clipping Path Services
                </h3>
                <p className="feature-description">
                  Clipping path, an Adobe Photoshop Pen tool-based photo editing
                  service that is widely utilized to eliminate, replace, and
                  modify an image background. Our expert photo editors have the
                  necessary touch to craft it exquisitely. If you need your
                  product or images clipping path, remove background, image
                  resizing, then please contract with us. You will get 24/7-365
                  days support.
                </p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="feature">
                <div className="image-container">
                  <img
                    className="img-fluid"
                    style={{ height: "250px" }}
                    src="https://drive.google.com/uc?id=1Y9oVTIcgABVWh8OBBkNXDtpMiknAXXPW"
                    alt=""
                  />
                </div>
                <h3 className="text-center feature-title">
                  Retouching Services
                </h3>
                <p className="feature-description">
                  This is a professional graphic design team with 15 years’
                  Experience. we are skin retouch and edit color correction
                  professionally, also any retouch and color correction you
                  want. model retouch and color correction, product retouch and
                  color correction, jewelry retouch and color correction,
                  Commercial Photo retouch and color correction, ETC. You will
                  get 24/7-365 days support.
                </p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="feature">
                <div className="image-container">
                  <img
                    className="img-fluid"
                    style={{ height: "250px" }}
                    src=" https://drive.google.com/uc?id=1ncLgpyoYFW4vea5qesycJS3SaxyRdLCr "
                    alt=""
                  />
                </div>
                <h3 className="text-center feature-title">
                  Shoe Photo Editing Services
                </h3>
                <p className="feature-description">
                  This is a professional graphic design team with 15 years’
                  Experience. we are expert in handling all sorts of shoe or
                  footwear photo editing. Our shoe photo editing service
                  includes background removal, shadow creation, spot removal,
                  etc. You will get 24/7-365 days support.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Ecard;
