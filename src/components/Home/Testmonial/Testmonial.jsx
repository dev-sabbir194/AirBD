import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Testmonial.css";
import SectionTitle from "../../../pages/Shared/SectionTitle/SectionTitle";



const testimonialData = [
  {
    id: 1,
    title: "Clipping Path Services",
    quote: "Enhance your images with precision and quality.",
    testimonial:
      "I have been using their clipping path services for my e-commerce business, and I am extremely satisfied with the results. The team pays great attention to detail and delivers high-quality work within the given timeframe. Highly recommended!",
    testimonialImage:
      "https://drive.google.com/uc?id=1d2gluV7n8wAV_IjyxVlkuW3ebvJPCr3R",
    testimonialName: "Michael E. Mathews",
    quoteImage:
      "https://drive.google.com/uc?id=1TWfXI-23kEn_RAULr5OzltWqUj7GBl15",
  },

  {
    id: 2,
    title: "Multiple Clipping Path Services",
    quote: "Experience unmatched flexibility in image editing.",
    testimonial:
      "Their multiple clipping path services have been a lifesaver for my graphic design projects. I can easily separate different elements in the image and edit them individually. The quality of work and attention to detail are exceptional. I highly recommend their services!",
    testimonialImage:
      "https://drive.google.com/uc?id=1dMyAmQ_j2cdj_M1kiWhfXxyYzm9nWLhT",
    testimonialName: "Vera F. Delaney",
    quoteImage:
      "https://drive.google.com/uc?id=1TWfXI-23kEn_RAULr5OzltWqUj7GBl15",
  },
  {
    id: 3,
    title: "Product Photo Cleaning",
    quote: "Transform your product images into perfection.",
    testimonial:
      "Their product photo cleaning service has been a game-changer for my online store. They remove all the imperfections and make the products look flawless. The attention to detail is commendable, and the final results speak for themselves. I couldn't be happier!",
    testimonialImage:
      "https://drive.google.com/uc?id=1Ys__4HFsIeHAw5z0_jLJh6TdGiVKd7UP",
    testimonialName: "William S. McClure",
    quoteImage:
      "https://drive.google.com/uc?id=1TWfXI-23kEn_RAULr5OzltWqUj7GBl15",
  },

  {
    id: 4,
    title: "Jewelry Editing Services",
    quote: "Bring out the brilliance of your jewelry pieces.",
    testimonial:
      "I have used their jewelry editing services for my online jewelry store, and the results are outstanding. They enhance the shine, clarity, and overall appeal of the jewelry pieces. The attention to detail and expertise in jewelry editing are remarkable. Highly recommended!",
    testimonialImage:
      "https://drive.google.com/uc?id=1xinFj_bR3CxssewEnTv93Fmf_jdqHI-n",
    testimonialName: "Simon C. Harvey",
    quoteImage:
      "https://drive.google.com/uc?id=1TWfXI-23kEn_RAULr5OzltWqUj7GBl15",
  },
  {
    id: 5,
    title: "Shoe Photo Editing Services",
    quote: "Give your shoe images a professional touch.",
    testimonial:
      "Their shoe photo editing services have helped me showcase my footwear collection in the best possible way. They remove any imperfections, adjust colors, and make the shoes look appealing. The quality of their work is exceptional, and I couldn't be happier with the results!",
    testimonialImage:
      "https://drive.google.com/uc?id=193M3-FARv04wXj2N_Xv2vC7Pt8dOieK3",
    testimonialName: "Tracy E. Bell",
    quoteImage:
      "https://drive.google.com/uc?id=1TWfXI-23kEn_RAULr5OzltWqUj7GBl15",
  },
  {
    id: 6,
    title: "Ghost Mannequin Service",
    quote: "Create stunning product visuals with invisible mannequins.",
    testimonial:
      "I have been using their ghost mannequin service for my clothing brand, and the results are simply fantastic. They seamlessly remove the mannequins from the images, creating a clean and professional look. Their attention to detail and commitment to quality are commendable. Highly recommended!",
    testimonialImage:
      "https://drive.google.com/uc?id=1xinFj_bR3CxssewEnTv93Fmf_jdqHI-n",
    testimonialName: "Robert T. McCoy",
    quoteImage:
      "https://drive.google.com/uc?id=1TWfXI-23kEn_RAULr5OzltWqUj7GBl15",
  },
];


const Testmonial = () => {
  return (
    <div className="mt-5">
      <div className="row justify-content-center section-title">
        <SectionTitle
          heading="AirBD"
          subHeading="TESTIMONIALS"
          details=" Over 15,000 photo editing clients all over the world, some of them speak for us!"
        ></SectionTitle>
        <div className="section-title-dots text-center">
          <span style={{ background: "#6ca86a" }}></span>
          <span style={{ background: "#eca817" }}></span>
          <span style={{ background: "#3da2d8" }}></span>
          <span style={{ background: "#005374" }}></span>
        </div>
      </div>
      <Swiper
        spaceBetween={20} // Set spaceBetween to 5
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          // For small devices
          576: {
            slidesPerView: 1,
          },
          // For medium and large devices
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {testimonialData.map((testimonial) => (
          <SwiperSlide className="mb-5" key={testimonial.id}>
            <Container className="testimonial-section">
              <div className="testimonial-content">
                <div className="testimonial-img-container">
                  <img
                    className="testimonial-img"
                    src={testimonial.testimonialImage}
                    alt=""
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div className="testimonial-text">
                  <p className="testimonial-quote">
                    <img
                      className="testimonial-img"
                      src={testimonial.quoteImage}
                      alt=""
                      style={{ width: "40px", height: "40px" }}
                    />
                    {testimonial.quote}
                  </p>
                  <h3 className="testimonial-name">
                    {testimonial.testimonialName}
                  </h3>
                  <p className="testimonial-description">
                    {testimonial.testimonial}
                  </p>
                </div>
              </div>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testmonial;
