import "./GhostMeniquin.css";
import { Container, Row, Col } from "react-bootstrap";
import { FcBusinessman } from "react-icons/fc";
import Countdown from "../../Countdown/Countdown";
import CategoryImg from "../../../../pages/Shared/CategoryImg/CategoryImg";
import { Link } from "react-router-dom";
import FAQSection from "../../../../pages/Shared/FAQSection/FAQSection";
const GhostMannequinService = () => {
  const pdata = [
    {
      id: 1,
      title: "Ghost Mannequin Service",
      description: [
        "Achieve a ghost mannequin effect for your clothing and apparel products.",
        "Our skilled editors seamlessly blend multiple images to create a hollow mannequin look, showcasing the shape and fit of your garments.",
        "Enhance your product images with our ghost mannequin service and make them visually appealing.",
        "Present your garments in a professional and appealing manner with our expert ghost mannequin editing.",
        "Capture the attention of your customers and highlight the unique features of your clothing.",
      ],
    },
  ];
  return (
    <div className="banner" style={{}}>
      <div
        className=""
        style={{
          background: "linear-gradient(to right, #4ecdc4, #556270)",
          width: "100%",
          height: "700px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container className="mb-5">
          <Row>
            <Col lg={6} className="text-center">
              <h1 style={{ fontWeight: "800", color: "#ffffff" }}>
                Ghost Mannequin Service [Invisible Mannequin]
              </h1>
              <p style={{ fontWeight: "600", color: "#ffffff" }}>
                We offer various image manipulation services and among them
                Ghost Mannequin or invisible mannequin service is a popular one.
                To execute it, three shots are taken from the front, back, and
                inner views. Then, the inner view is digitally stitched with
                outer image to create a ghostly view. It's generally applied to
                apparel like t-shirts, shirts, pants, sweaters, etc. E-commerce
                sites and garment industries need this service as it's helpful
                to promote their garment products.
              </p>
              <div className="text-center">
                <Link to="/getaquote">
                  <button className="button" id="quote">
                    Get A Quote
                  </button>{" "}
                </Link>
              </div>
            </Col>
            <Col
              lg={6}
              className="d-flex align-items-center justify-content-center"
            >
              <img
                src="https://drive.google.com/uc?id=1yYKujAGBkXOSKh0gjjaxOeD6qI6vz9Kw"
                alt="Image"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* descriptions */}
      <div className="descriptions mt-5 mb-5">
        <h1
          className="text-center mb-5"
          style={{ fontWeight: "800", color: "#005374" }}
        >
          PROFESSIONAL GHOST MANNEQUIN <br /> REMOVAL SERVICE
        </h1>
        <div className="section-title-dots text-center mb-5">
          <span style={{ background: "#6ca86a" }}></span>
          <span style={{ background: "#eca817" }}></span>
          <span style={{ background: "#3da2d8" }}></span>
          <span style={{ background: "#005374" }}></span>
        </div>

        <div className="ms-5" style={{ fontSize: "24px" }}>
          {pdata.map((item) => (
            <div key={item.id}>
              {item.description.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="d-flex ms-5 mt-5">
          <img
            style={{ width: "100px", height: "50px" }}
            src="https://drive.google.com/uc?id=1TWfXI-23kEn_RAULr5OzltWqUj7GBl15"
            alt=""
          />
          <p style={{ fontSize: "24px" }}>
            These are great and precisely the thing I was searching for. I am so
            grateful! As usual, nicely done and executed with greatness
            <hr />
            <p>
              <FcBusinessman style={{ width: "50px", height: "50px" }} />{" "}
              Benjamin Mitchell - USA
            </p>
          </p>
        </div>
        <div className="text-center">
          <Link to="/getaquote">
            <button className="button" id="quote">
              Get A Quote
            </button>
          </Link>
        </div>
      </div>
      {/* Count down */}
      <Countdown />

      {/* Category  */}

      <div className="text-center mt-5">
        <h1 style={{ fontWeight: "800" }}>CATEGORIES OF OUR IMAGE </h1>
        <h1 style={{ fontWeight: "800" }}>EDITING SERVICE</h1>
        <p
          className="text-center "
          style={{
            width: "85%",
            fontWeight: "500",
            fontSize: "18px",
            marginLeft: "8%",
          }}
        >
          E-commerce sellers and photographer are more curious about stuff like
          background removal, turning image background into transparent
          background, white background, colored background services, etc.
          Depending on the clients' requirements we provide an array of
          background removal and editing service-
        </p>
      </div>
      <div className="section-title-dots text-center mt-5 mb-5">
        <span style={{ background: "#6ca86a" }}></span>
        <span style={{ background: "#eca817" }}></span>
        <span style={{ background: "#3da2d8" }}></span>
        <span style={{ background: "#005374" }}></span>
      </div>
      <CategoryImg />
      <FAQSection />
    </div>
  );
};

export default GhostMannequinService;
