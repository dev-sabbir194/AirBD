import "./Footer.css";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
const Footer = () => {
  return (
    <>
      <div className="Footer py-5" style={{ backgroundColor: "#005274" }}>
        <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-md-center">
          <div className="logo-img text-center mb-3 mb-md-0 d-flex text-center">
            <img
              style={{ width: "75px", height: "75px" }}
              src="https://drive.google.com/uc?id=1-2yI-uyrDpTTDCJEPn5v_vGTjvdlWtra"
              alt=""
            />
            <h2
              style={{ fontSize: "54px", color: "#ffc400", fontWeight: "700" }}
            >
              Air
              <span
                style={{
                  fontSize: "54px",
                  color: "#a8bfbc",
                  fontWeight: "700",
                }}
              >
                BD
              </span>
            </h2>
          </div>
          <div className="d-flex">
            <div className="subscribe d-flex">
              <input
                className="tnp-email"
                type="email"
                placeholder="Your Email Address"
                id="address"
                name="ne"
                required=""
              />
              <button className="subscribe-button">Subscribe</button>
            </div>
          </div>
        </div>

        <hr />

        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <h3 className="text-white">
                <span>Air</span>BD
              </h3>
              <p className="text-white">
                AirBD,is a renowned photo manipulation and graphic design
                service provider with over 15 years of experience in the image
                editing industry. AirBD serves top global brands such as Adidas,
                Nike, Puma, Apple, Samsung, Tommy Hilfiger, Hugo Boss, and more.
                The company offers simple yet effective solutions to
                photographers, e-commerce companies, advertising agencies, web
                design companies, magazine publishers, printing companies, and
                other clients.
              </p>
              <div className="footer-icons"></div>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h3 className="text-white">COMPANY INFO</h3>
              <ul>
                <li className="nav-item">
                  <a className="footer-link" href="/home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="footer-link" href="/aboutus">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="footer-link" href="/contactus">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="footer-link" href="/price">
                    Price
                  </a>
                </li>
                <li className="nav-item">
                  <a className="footer-link" href="/payment">
                    Payment
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 col-12 ft-3 text-white">
              <h3>CONTUCT US</h3>
              <p>
                <span
                  className="me-3"
                  style={{
                    color: "#2de9df",
                  }}
                >
                  <FaPhone />
                </span>
                +01345666666
              </p>
              <hr />
              <p>
                {" "}
                <span
                  className="me-3"
                  style={{
                    color: "#2de9df",
                  }}
                >
                  <MdEmail />
                </span>
                info@mail.com
              </p>
              <hr />
              <p>
                {" "}
                <span
                  className="me-3"
                  style={{
                    color: "#2de9df",
                  }}
                >
                  <MdLocationOn />
                </span>
                Dhaka,Bangladesh
              </p>
            </div>
          </div>
        </div>
        <hr />
        <p className="text-center text-white mt-5">
          <strong>All rights reserved By © AirBD</strong>
        </p>
      </div>
    </>
  );
};

export default Footer;
