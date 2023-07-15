import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Services = () => {
  const Items = [
    {
      id: 1,
      title: "Clipping Path Services",
      description:
        "Eliminate, replace, and modify image backgrounds. Expert photo editors. Contact us for clipping path, background removal, and resizing. 24/7 support.",
      image: "https://drive.google.com/uc?id=1YqMzjeMs9hDxbAG2Vc80aCRYcsZ0V1AB",
    },
    {
      id: 2,
      title: "Clothing Photo Editing Services",
      description:
        "Upgrade your product photos for online stores. Skilled editors remove flaws, adjust colors, and apply effects. Color correction, background removal, and more. 24/7 support.",
      image: "https://drive.google.com/uc?id=1DwJN7QYBCS8h5E2JiVzhJbqZiPgoSmTn",
    },
    {
      id: 3,
      title: "Cosmetic",
      description:
        "Enhance cosmetic product images. Clipping path, background removal, and resizing. Contact us for high-quality results. 24/7 support.",
      image: "https://drive.google.com/uc?id=1yxrXAkuA7uju2FV-ZZMAYU-q9cnctYo4",
    },
    {
      id: 4,
      title: "Ghost Mannequin Service [Invisible Mannequin]",
      description:
        "Promote garment products with ghost mannequin service. Stitch front, back, and inner views for ghostly images. Perfect for apparel. 24/7 support.",
      image: "https://drive.google.com/uc?id=1yYKujAGBkXOSKh0gjjaxOeD6qI6vz9Kw",
    },
    {
      id: 5,
      title: "Photo Restoration Services",
      description:
        "Restore and rejuvenate damaged or distorted images. Skilled team brings life to your photos. Contact us for high-quality results. 24/7 support.",
      image: "https://drive.google.com/uc?id=1ecjyQnfqyzMcygnSKBbsMBaAX2wXSpvj",
    },
    {
      id: 6,
      title: "Retouching Services",
      description:
        "Professional skin retouching and color correction services. Enhance model photos, product images, jewelry, and more. Flawless retouching. 24/7 support.",
      image: "https://drive.google.com/uc?id=1Y9oVTIcgABVWh8OBBkNXDtpMiknAXXPW",
    },
    {
      id: 7,
      title: "Background Removal",
      description:
        "Expert background removal service for images. Clipping path, resizing, and background removal. Contact us for high-quality results. 24/7 support.",
      image: "https://drive.google.com/uc?id=1jUD2ZqmlHEuKnWw_W8E092ZNghDMzwUn",
    },
    {
      id: 8,
      title: "Masking Services",
      description:
        "Professional masking services for products, models, and images. Clipping path, masking, resizing, and background removal. High-quality results. 24/7 support.",
      image: "https://drive.google.com/uc?id=1wBRzUGZrJ1p_T1rvosTlyXez-puLChWr",
    },
    {
      id: 9,
      title: "Jewelry Editing Services",
      description:
        "Enhance jewelry photos with top-notch editing service. Gold, diamond, and silver photo editing, background removal, and more. Professional results. 24/7 support.",
      image: "https://drive.google.com/uc?id=19daqJljtDKvGV5ZnOwz-2U6IJboRbJRm",
    },
    {
      id: 10,
      title: "Re-color Services",
      description:
        "Change the color of products, images, or anything professionally. Recoloring services for clothes, T-shirts, jewelry, logos, and more. High-quality results. 24/7 support.",
      image: "https://drive.google.com/uc?id=1e8C6_3WAvEySVM7Wp-m-TVRxpeVuKQwV",
    },
    {
      id: 11,
      title: "Shadow/Reflection Services",
      description:
        "Expert shadow and reflection services for products and images. Clipping path, background removal, resizing, and shadow/reflection creation. High-quality results. 24/7 support.",
      image: "https://drive.google.com/uc?id=1Gu0e6MhCWa1az_kYq9hiG7nTTAwkOjGu",
    },
    {
      id: 12,
      title: "Shoe Photo Editing Services",
      description:
        "Expert shoe and footwear photo editing services. Background removal, shadow creation, spot removal, and more. High-quality results. 24/7 support.",
      image: "https://drive.google.com/uc?id=1ncLgpyoYFW4vea5qesycJS3SaxyRdLCr",
    },
  ];

  return (
    <div style={{ marginTop: "180px" }}>
      <div className="text-center mt-5">
        <h1 style={{ fontWeight: "800" }}>OUR SERVICES</h1>

        <p
          className="text-center "
          style={{
            width: "85%",
            fontWeight: "500",
            fontSize: "18px",
            marginLeft: "8%",
          }}
        >
          Experience our top-notch photo editing service tailored to your needs.
          Our skilled team of professionals is dedicated to enhancing your
          images to perfection, whether you're a professional photographer,
          business owner, or an individual looking to enhance personal photos.
          From basic retouching to advanced photo manipulation, we offer a wide
          range of editing techniques such as portrait retouching, product photo
          editing, background removal, and color correction. With our attention
          to detail and commitment to quality, we guarantee impeccable results
          that surpass your expectations. Trust us to transform your photos and
          make them stand out from the crowd. Contact us today to unlock the
          full potential of your images with our exceptional photo editing
          services.
        </p>
      </div>
      <div className="section-title-dots text-center mt-5 mb-5">
        <span style={{ background: "#6ca86a" }}></span>
        <span style={{ background: "#eca817" }}></span>
        <span style={{ background: "#3da2d8" }}></span>
        <span style={{ background: "#005374" }}></span>
      </div>
      <Container className="mb-5">
        <Row xs={1} sm={2} md={2} lg={2} xl={2} className="g-4">
          {Items.map((item) => (
            <Col key={item.id}>
              <Card className="set-card" style={{ width: "100%" }}>
                <Card.Img
                  className="img-fluid"
                  style={{ height: "300px" }}
                  variant="top"
                  src={item.image}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text className="text-center">
                    {item.description}
                  </Card.Text>
                  <div className="flex-grow-1 text-center">
                    <Link to="/getaquote">
                      <button className="button btn-style">Get A Quote</button>
                    </Link>
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

export default Services;
