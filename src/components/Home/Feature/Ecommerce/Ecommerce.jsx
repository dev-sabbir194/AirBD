import { Image } from "react-bootstrap";
// import CompareImage from "react-compare-image";
import "./Ecommerce.css";
import { Link } from "react-router-dom";

const Ecommerce = () => {
  return (
    <div className="ecommerce">
      <div className="image-gradiant mb-5 d-flex gap-5 justify-content-between">
        <div className="text-ecomerce">
          <h2 className="title" style={{ fontSize: "50px" }}>
            E-Commerce <br /> <strong>Product Photo Editing</strong>
          </h2>
          <p style={{ fontSize: "20px" }}>
            Are you a vendor or seller on well-known E-commerce marketplaces
            like Amazon, eBay, AliExpress, Etsy, or Flipkart? Are you seeking
            expert product photo editing services for your online store? You're
            in the right place!
          </p>
          <div className="d-flex">
            <button className="qoute-btn"> View Details</button>
            <Link to="/getaquote">
              <button className="qoute-btn"> Get A Quote</button>
            </Link>
          </div>
        </div>
        <div>
          <Image
            src=" https://drive.google.com/uc?id=1ZSwVZQm9uc_ibCQr5UIFSMVfMXZOFyjR"
            alt="sssss"
          />
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
