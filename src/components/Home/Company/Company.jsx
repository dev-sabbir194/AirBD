
import Slider from "react-infinite-logo-slider";
import SectionTitle from "../../../pages/Shared/SectionTitle/SectionTitle";


const testimonialData = [
  {
    id: 1,
    image:
      "https://cdn.colorexpertsbd.com/wp-content/uploads/2022/01/Amazon_CEI_Client.jpg",
  },
  {
    id: 2,
    image:
      "https://cdn.colorexpertsbd.com/wp-content/uploads/2022/01/Shopify_CEI_Client.jpg",
  },
  {
    id: 3,
    image:
      "https://cdn.colorexpertsbd.com/wp-content/uploads/2022/01/Apple_CEI_Client.jpg",
  },
];

const Company = () => {
  return (
    <div className="mt-5">
      <div className="row justify-content-center section-title">
        <SectionTitle
          heading="AirBD"
          subHeading="RENOWNED CLIENTS"
          details=" In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space telescope known as the Hubble."
        />
        <div className="section-title-dots text-center">
          <span style={{ background: "#6ca86a" }}></span>
          <span style={{ background: "#eca817" }}></span>
          <span style={{ background: "#3da2d8" }}></span>
          <span style={{ background: "#005374" }}></span>
        </div>
      </div>
      <Slider
        width="250px"
        duration={40}
        pauseOnHover={true}
        blurBorders={false}
        blurBoderColor={"#fff"}
        gap={20}
      >
        {testimonialData.map((testimonial) => (
          <Slider.Slide key={testimonial.id}>
            <img
              src={testimonial.image}
              alt="any"
              className="w-36 "
              style={{ marginRight: "100px" }}
            />
          </Slider.Slide>
        ))}
      </Slider>
    </div>
  );
};

export default Company;
