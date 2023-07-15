// import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "./Slide.css";
// import { Link } from "react-router-dom";

const Slider = () => {
  // const imageData = [
  //   {
  //     id: 1,
  //     image: "https://drive.google.com/uc?id=18JPLTEsgUwIbknqRtDfeElBpmCkVUMeI",
  //     caption: "THIS IS A PROFESSIONAL GRAPHICS DESIGN TEAM",
  //     brcaption: "WITH 15 YEARS EXPERIENCE",
  //     quote: "GET STARTED WITH QUOTE",
  //     captionColor: "linear-gradient(to right, #a366dd, #df2481)",
  //   },
  //   {
  //     id: 2,
  //     image: "https://drive.google.com/uc?id=1yYKujAGBkXOSKh0gjjaxOeD6qI6vz9Kw",
  //     caption: "THIS IS A PROFESSIONAL GRAPHICS DESIGN TEAM",
  //     brcaption: "WITH 15 YEARS EXPERIENCE",
  //     quote: "GET STARTED WITH QUOTE",
  //     captionColor: "linear-gradient(to right, #a366dd, #df2481)",
  //   },
  //   {
  //     id: 3,
  //     image: "https://drive.google.com/uc?id=1XPho6SZMW8QEWhJyFrxbZRAVAaaXK5kN",
  //     caption: "THIS IS A PROFESSIONAL GRAPHICS DESIGN TEAM",
  //     brcaption: "WITH 15 YEARS EXPERIENCE",
  //     quote: "GET STARTED WITH QUOTE",
  //     captionColor: "linear-gradient(to right, #a366dd, #df2481)",
  //   },
  //   {
  //     id: 4,
  //     image: "https://drive.google.com/uc?id=12H2o694WsjbrHWBZkbssfHPOzz1PPMbz",
  //     caption: "THIS IS A PROFESSIONAL GRAPHICS DESIGN TEAM",
  //     brcaption: "WITH 15 YEARS EXPERIENCE",
  //     quote: "GET STARTED WITH QUOTE",
  //     captionColor: " linear-gradient(to right, #a366dd, #df2481)",
  //   },
  //   {
  //     id: 5,
  //     image: "https://drive.google.com/uc?id=19WLkYCNWSrWR3SX9kk33ekipJRdA7kRu",
  //     caption: "THIS IS A PROFESSIONAL GRAPHICS DESIGN TEAM",
  //     brcaption: "WITH 15 YEARS EXPERIENCE",
  //     quote: "GET STARTED WITH QUOTE",
  //     captionColor: "linear-gradient(to right, #a366dd, #df2481)",
  //   },
  // ];

  const color = "linear-gradient(to right, #a366dd, #df2481)"

  return (
    <div className="">
      {/* <Carousel>
        {imageData.map((image) => (
          <Carousel.Item key={image.id} interval={10000}>
            <img
              className="d-block w-100"
              style={{ height: "600px" }}
              src={image.image}
              alt={image.caption}
            />
            <Carousel.Caption className="custom-caption">
              <h1
                className="mb-5"
                style={{
                  backgroundImage: image.captionColor,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: "50px",
                  fontWeight: "800",
                }}
              >
                {image.caption} <br />
                {image.brcaption}
              </h1>
              <div className="text-center">
                <Link to="/getaquote">
                  <button className="button" id="get-start">
                    {image.quote}
                  </button>
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel> */}

      <header className="header ">
        <img
          style={{
            height: "600px",
          }}
          src="https://drive.google.com/uc?id=12H2o694WsjbrHWBZkbssfHPOzz1PPMbz"
          alt="Header Image"
          className="header-image"
        />
        <div className="header-overlay"></div>
        <div className="header-content">
          <h1 className="header-title ">
            THIS IS A PROFESSIONAL GRAPHICS DESIGN TEAM <br />
            WITH 15 YEARS EXPERIENCE
          </h1>

          <div className="text-center mt-5">
            <Link to="/getaquote">
              <button className="button" id="get-start">
                GET STARTED WITH QUOTE
              </button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Slider;
