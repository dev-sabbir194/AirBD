import { Container, Row, Col } from "react-bootstrap";
import { FcBusinessman } from "react-icons/fc";
import Countdown from "../../Countdown/Countdown";
import CategoryImg from "../../../../pages/Shared/CategoryImg/CategoryImg";
import { Link } from "react-router-dom";
import FAQSection from "../../../../pages/Shared/FAQSection/FAQSection";
const ShoePhotoEditingServices = () => {
  const pdata = [
    {
      id: 1,
      title: "Shoe Photo Editing Services",
      description: [
        "Enhance your shoe product images with our shoe photo editing services.",
        "Our skilled editors will remove imperfections, add shadows, and enhance colors to make your shoe photos visually appealing.",
        "Highlight the unique features and craftsmanship of your footwear with our expert shoe photo editing.",
        "Present your shoe collection in the best possible way and attract customers with high-quality images.",
        "Make your shoes stand out and leave a lasting impression on potential buyers.",
      ],
    },
  ];
  return (
    <div className="banner" style={{}}>
      <div className=" all-work-bg">
        <Container style={{ marginTop: "120px" }}>
          <Row>
            <Col lg={6} className="text-center mb-4 mt-5">
              <h1 style={{ fontWeight: "800", color: "#ffffff" }}>
                Shoe Photo Editing Services
              </h1>
              <p style={{ fontWeight: "600", color: "#ffffff" }}>
                This is a professional graphic design team with 15 years’
                Experience. we are expert in handling all sorts of shoe or
                footwear photo editing. Our shoe photo editing service includes
                background removal, shadow creation, spot removal, etc. You will
                get 24/7-365 days support.
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
              className="d-flex align-items-center justify-content-center mb-5"
            >
              <img
                src="https://drive.google.com/uc?id=1ncLgpyoYFW4vea5qesycJS3SaxyRdLCr"
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
          PROFESSIONAL SHOE PHOTO <br /> EDITING SERVICES
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

export default ShoePhotoEditingServices;
