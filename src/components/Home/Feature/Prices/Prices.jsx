import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Price.css";
import SectionTitle from "../../../../pages/Shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const Prices = () => {
  const cardData = [
    {
      id: 1,
      feature: "Clipping Path Services",
      featureColor: "#63B855",
      image: "https://drive.google.com/uc?id=1YqMzjeMs9hDxbAG2Vc80aCRYcsZ0V1AB",

      sliderPositionPercentage: 0.5,
      handleSize: 40,
      handleColor: "#005FAC",
      hover: true,
      title: "0.20",
      paragraphs: [
        "Basic Paths",
        "Simple Paths",
        "Complex Paths",
        "Super Complex Paths",
      ],
      price: ["0.49", "Simple Paths", "Complex Paths", "Super Complex Paths"],
      buttons: ["Free Trial", "Get A Quote"],
    },

    {
      id: 2,
      feature: "Car Photo Editing Services",
      featureColor: "#3DA2D8",
      image:
        "https://drive.google.com/uc?id=1ScoEW6k7Am34xgZr2mX9kVxGJSn_pwEY ",
      sliderPositionPercentage: 0.5,
      handleSize: 40,
      handleColor: "#005FAC",
      hover: true,
      title: "0.25",
      paragraphs: ["Paragraph 1", "Paragraph 2", "Paragraph 3", "Paragraph 4"],
      buttons: ["Free Trial", "Get A Quote"],
    },
    {
      id: 3,
      feature: "Ghost Mannequin Services ",
      featureColor: "#F4C936",
      image:
        "https://drive.google.com/uc?id=1yYKujAGBkXOSKh0gjjaxOeD6qI6vz9Kw ",

      sliderPositionPercentage: 0.5,
      handleSize: 40,
      handleColor: "#005FAC",
      hover: true,
      title: "0.99",
      paragraphs: ["Paragraph 1", "Paragraph 2", "Paragraph 3", "Paragraph 4"],
      buttons: ["Free Trial", "Get A Quote"],
    },
    {
      id: 4,
      feature: "Image Background Removal",
      featureColor: "#6ca86a",
      image:
        "https://drive.google.com/uc?id=1jUD2ZqmlHEuKnWw_W8E092ZNghDMzwUn ",
      sliderPositionPercentage: 0.5,
      handleSize: 40,
      handleColor: "#005FAC",
      hover: true,
      title: "0.49",
      paragraphs: ["Paragraph 1", "Paragraph 2", "Paragraph 3", "Paragraph 4"],
      buttons: ["Free Trial", "Get A Quote"],
    },
    {
      id: 5,
      feature: "Clothing Photo Editing",
      featureColor: "#3DA2D8",
      image: "https://drive.google.com/uc?id=1DwJN7QYBCS8h5E2JiVzhJbqZiPgoSmTn",

      sliderPositionPercentage: 0.5,
      handleSize: 40,
      handleColor: "#005FAC",
      hover: true,
      title: "0.99",
      paragraphs: ["Paragraph 1", "Paragraph 2", "Paragraph 3", "Paragraph 4"],
      buttons: ["Free Trial", "Get A Quote"],
    },
    {
      id: 6,
      feature: "Cosmetics Photo Editing",
      featureColor: "#F4C936",
      image:
        " https://drive.google.com/uc?id=1yxrXAkuA7uju2FV-ZZMAYU-q9cnctYo4 ",

      sliderPositionPercentage: 0.5,
      handleSize: 40,
      handleColor: "#005FAC",
      hover: true,
      title: "0.99",
      paragraphs: ["Paragraph 1", "Paragraph 2", "Paragraph 3", "Paragraph 4"],
      buttons: ["Free Trial", "Get A Quote"],
    },
    {
      id: 7,
      feature: "Image Masking Services",
      featureColor: "#6ca86a",
      image: "https://drive.google.com/uc?id=1wBRzUGZrJ1p_T1rvosTlyXez-puLChWr",

      sliderPositionPercentage: 0.5,
      handleSize: 40,
      handleColor: "#005FAC",
      hover: true,
      title: "0.99",
      paragraphs: ["Paragraph 1", "Paragraph 2", "Paragraph 3", "Paragraph 4"],
      buttons: ["Free Trial", "Get A Quote"],
    },
    {
      id: 8,
      feature: "Image Restoration Services",
      featureColor: "#F4C936",
      image: "https://drive.google.com/uc?id=1ecjyQnfqyzMcygnSKBbsMBaAX2wXSpvj",

      sliderPositionPercentage: 0.5,
      handleSize: 40,
      handleColor: "#005FAC",
      hover: true,
      title: "2.00-$1.99",
      paragraphs: ["Paragraph 1", "Paragraph 2", "Paragraph 3", "Paragraph 4"],
      buttons: ["Free Trial", "Get A Quote"],
    },
    {
      id: 9,
      feature: "Image Retouching Services",
      featureColor: "#3DA2D8",
      image: "https://drive.google.com/uc?id=1Y9oVTIcgABVWh8OBBkNXDtpMiknAXXPW",

      sliderPositionPercentage: 0.5,
      handleSize: 40,
      handleColor: "#005FAC",
      hover: true,
      title: "0.99",
      paragraphs: ["Paragraph 1", "Paragraph 2", "Paragraph 3", "Paragraph 4"],
      buttons: ["Free Trial", "Get A Quote"],
    },
    {
      id: 10,
      feature: "Jewelry Photo Editing",
      featureColor: "#6ca86a",
      image:
        " https://drive.google.com/uc?id=19daqJljtDKvGV5ZnOwz-2U6IJboRbJRm ",

      sliderPositionPercentage: 0.5,
      handleSize: 40,
      handleColor: "#005FAC",
      hover: true,
      title: "1.00-$2.00",
      paragraphs: ["Paragraph 1", "Paragraph 2", "Paragraph 3", "Paragraph 4"],
      buttons: ["Free Trial", "Get A Quote"],
    },
    {
      id: 11,
      feature: "Photoshop Color Correction ",
      featureColor: "#3DA2D8",
      image: "https://drive.google.com/uc?id=1e8C6_3WAvEySVM7Wp-m-TVRxpeVuKQwV",

      sliderPositionPercentage: 0.5,
      handleSize: 40,
      handleColor: "#005FAC",
      hover: true,
      title: "0.75",
      paragraphs: ["Paragraph 1", "Paragraph 2", "Paragraph 3", "Paragraph 4"],
      buttons: ["Free Trial", "Get A Quote"],
    },

    {
      id: 12,
      feature: "Shoe Photo Editing",
      featureColor: "#F4C936",
      image: "https://drive.google.com/uc?id=1ncLgpyoYFW4vea5qesycJS3SaxyRdLCr",

      sliderPositionPercentage: 0.5,
      handleSize: 40,
      handleColor: "#005FAC",
      hover: true,
      title: "0.49-$99",
      paragraphs: ["Paragraph 1", "Paragraph 2", "Paragraph 3", "Paragraph 4"],
      buttons: ["Free Trial", "Get A Quote"],
    },
  ];

  return (
    <div className="price-section">
      <div className="row justify-content-center section-title">
        <SectionTitle
          heading="AirBD"
          subHeading="PRICES FOR PHOTO EDITING SERVICES"
          details=" We offer affordable prices and big discounts for bulk professional photo editing and retouching services. We charge reasonably for our service along with providing the most reliable and top-quality photo retouching and image editing services. Because we care for you, your time, and cost!"
        ></SectionTitle>
        <div className="section-title-dots text-center">
          <span style={{ background: "#6ca86a" }}></span>
          <span style={{ background: "#eca817" }}></span>
          <span style={{ background: "#3da2d8" }}></span>
          <span style={{ background: "#005374" }}></span>
        </div>
      </div>
      <div className="feature-section ">
        <Swiper
          spaceBetween={20} // Set spaceBetween to 5
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper pb-5"
          breakpoints={{
            // For small devices
            576: {
              slidesPerView: 1,
            },
            // For medium and large devices
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {cardData.map((card) => (
            <SwiperSlide key={card.id}>
              <div className=" " style={{ border: "5px solid #00000" }}>
                <div
                  className="card-header "
                  style={{ backgroundColor: card.featureColor }}
                >
                  <h4 className="text-center py-4">{card.feature}</h4>
                </div>
                <div className="card-img">
                  {/* <CompareImage
                    leftImage={card.leftImage}
                    rightImage={card.rightImage}
                    sliderPositionPercentage={card.sliderPositionPercentage}
                    handleSize={card.handleSize}
                    handleColor={card.handleColor}
                    hover={card.hover}
                    className="img-fluid"
                  /> */}
                  <img
                    className="img-fluid"
                    style={{ height: "240px", width: "100%" }}
                    src={card.image}
                    alt=""
                  />
                </div>
                <div className="details">
                  <p className="text-center">
                    Starts From{" "}
                    <span style={{ fontSize: "28px", fontWeight: "750" }}>
                      ${card.title}
                    </span>{" "}
                    per image
                  </p>
                  <div className="bottom d-flex  gap-2 justify-content-center mt-4 mb-2">
                    <button className="button " id="trial">
                      Free Trial
                    </button>
                    <Link to="/getaquote">
                      <button className="button" id="quote">
                        Get A Quote
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Prices;
