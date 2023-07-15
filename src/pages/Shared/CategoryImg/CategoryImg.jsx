import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoryImg = () => {
  const Items = [
    {
      id: 1,
      image: "https://drive.google.com/uc?id=1jUD2ZqmlHEuKnWw_W8E092ZNghDMzwUn",
      title: "Making Transparent Background",
      description:
        "Achieve a clean and professional look for your images by making the background transparent. Perfect for product photos or graphic design projects. Our skilled editors will meticulously remove the background, allowing you to seamlessly integrate your subject into any desired context.",
      price: 9.99,
      startPrice: "Starts From",
      delivery: "Images/24Hr",
      time: "3000",
    },
    {
      id: 2,
      image: "https://drive.google.com/uc?id=1e8C6_3WAvEySVM7Wp-m-TVRxpeVuKQwV",
      title: "Making White and Colored Background",
      description:
        "Enhance the visual appeal of your images by adding a white or colored background. Whether you need a clean and classic look or a vibrant and attention-grabbing backdrop, our experts will ensure a seamless integration. Choose from a variety of colors and let your subjects shine.",
      price: 14.99,
      startPrice: "Starts From",
      delivery: "Images/24Hr",
      time: "3000",
    },
    {
      id: 3,
      image: "https://drive.google.com/uc?id=1YqMzjeMs9hDxbAG2Vc80aCRYcsZ0V1AB",
      title: "Background Replacement",
      description:
        "Transform your images entirely with our professional background replacement service. Whether you desire a different environment or a customized backdrop, our highly skilled editors seamlessly blend elements to produce stunning and impactful visuals that captivate viewers. Choose us for a remarkable transformation of your images.",
      price: 19.99,
      startPrice: "Starts From",
      delivery: "Images/24Hr",
      time: "3000",
    },
    {
      id: 4,
      image: "https://drive.google.com/uc?id=1ScoEW6k7Am34xgZr2mX9kVxGJSn_pwEY",
      title: "Advanced Car Editing",
      description:
        "Enhance your car images with our advanced car editing service. Our experts utilize cutting-edge techniques to perfect every detail, from removing imperfections and enhancing colors to adding realistic shadows and reflections. Transform your car photos into stunning works of art that captivate viewers and highlight the true beauty of your vehicles.",
      price: 24.99,
      startPrice: "Starts From",
      delivery: "Images/24Hr",
      time: "3000",
    },
    {
      id: 5,
      image: "https://drive.google.com/uc?id=19daqJljtDKvGV5ZnOwz-2U6IJboRbJRm",
      title: "Advanced Jewelry Editing",
      description:
        "Elevate your jewelry images to the next level with our advanced jewelry editing service. Our skilled editors specialize in enhancing the brilliance and clarity of gemstones, removing imperfections, and creating flawless reflections. Whether it's for e-commerce, catalogs, or advertising, our expertise will ensure your jewelry shines with elegance and allure.",
      price: 29.99,
      startPrice: "Starts From",
      delivery: "Images/24Hr",
      time: "3000",
    },
    {
      id: 6,
      image: "https://drive.google.com/uc?id=1Gu0e6MhCWa1az_kYq9hiG7nTTAwkOjGu",
      title: "Advanced Shadow Effects",
      description:
        "Add depth and realism to your images with our advanced shadow effects service. Whether you need to create natural shadows, cast reflections, or simulate complex lighting scenarios, our expert editors will skillfully manipulate shadows to enhance the visual impact of your photos. Transform ordinary images into captivating visuals that leave a lasting impression.",
      price: 29.99,
      startPrice: "Starts From",
      delivery: "Images/24Hr",
      time: "3000",
    },
  ];

  return (
    <div>
      <Container className="mb-5">
        <Row xs={1} sm={2} md={2} lg={2} xl={2} className="g-4">
          {Items.map((item) => (
            <Col key={item.id}>
              <Card className="set-card" style={{ width: "100%" }}>
                <Card.Img
                  variant="top"
                  src={item.image}
                  style={{ height: "300px" }}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text className="text-center">
                    {item.description}
                  </Card.Text>
                  <div className="d-flex gap-2 mt-4">
                    <div
                      className="border-gradiant"
                      style={{
                        width: "100%",
                        height: "60px",
                      }}
                    >
                      <p className="">
                        {item.startPrice}
                        <br /> <strong>${item.price}</strong>
                      </p>
                    </div>
                    <div
                      className="border-gradiant"
                      style={{
                        width: "100%",
                        height: "60px",
                      }}
                    >
                      <p className="">
                        {item.delivery}
                        <br />
                        <strong>{item.time}</strong>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex mt-4 gap-2">
                    <div className="flex-grow-1">
                      <button className="btn-style">View Details</button>
                    </div>
                    <div className="flex-grow-1 ">
                      <Link to="/getaquote">
                        <button className="button btn-style">
                          Get A Quote
                        </button>
                      </Link>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CategoryImg;
