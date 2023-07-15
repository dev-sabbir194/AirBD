import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav-size ${isSticky ? "sticky" : ""}`}>
      <Navbar expand="lg" className="">
        <Container className="nav-container bg-white bg-shadow">
          <Navbar.Brand href="#home" className="me-auto d-flex">
            <img
              style={{ width: "75px", height: "75px" }}
              src="https://drive.google.com/uc?id=1-2yI-uyrDpTTDCJEPn5v_vGTjvdlWtra"
              alt=""
            />
            <h2
              style={{
                fontSize: "54px",
                color: "#ffc400",
                fontWeight: "700",
              }}
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
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto bg-white text-white ">
              <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "#000000" }}
                  to="/home"
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <div className="dropdown text-center">
                  <p className="btn-d">IMAGE EDITING</p>
                  <div
                    className="dropdown-content nav-border"
                    id="dropdown-size"
                  >
                    <div
                      className="d-flex  justify-content-between "
                      style={{ textAlign: "left" }}
                    >
                      <a className="text-primary">Image Background Removing</a>
                      <a className="text-primary">
                        Professional Photo Retouching
                      </a>
                      <a className="text-primary">
                        Photography Post Production
                      </a>
                      <a className="text-primary">Creative Editing Services</a>
                    </div>
                    <div
                      className="d-flex   justify-content-between"
                      style={{ textAlign: "left" }}
                    >
                      <Link to="/clippingpath">Clipping Path Services</Link>
                      <Link to="/photorestorations">
                        Photo Restoration Services{" "}
                      </Link>
                      <Link to="/shoephotoediting">
                        Shoe Photo Editing Services
                      </Link>
                      <Link to="/productphotoretouching">
                        Product Photo Retouching{" "}
                      </Link>
                    </div>
                    <div
                      className="d-flex justify-content-between"
                      style={{ textAlign: "left", zIndex: 1 }}
                    >
                      <Link to="/ghostmannequeen">Ghost Mannequin Service</Link>
                      <Link to="/colorcorrection">
                        Color Correction & Editing
                      </Link>
                      <Link to="/weddingphoto">Wedding Photo Services</Link>
                      <Link to="/productphotoclean">
                        Product Photo Cleaning
                      </Link>
                    </div>
                    <div
                      className="d-flex justify-content-between"
                      style={{ textAlign: "left" }}
                    >
                      <Link to="/masking">Masking Services</Link>
                      <Link to="/retouch">Retouching Services</Link>
                      <Link to="/clothingphoto">
                        Clothing Photo Editing Services
                      </Link>
                      <Link to="/productphotobg">Product Photo BG Remove</Link>
                    </div>
                    <div
                      className="d-flex justify-content-between"
                      style={{ textAlign: "left" }}
                    >
                      <Link to="/shadow">Shadow/Reflection Services</Link>
                      <Link to="/jewelry">Jewelry Editing Services</Link>
                      <Link to="/multiclippingpath">
                        Multiple Clipping Path Services
                      </Link>
                      <Link to="/bulkphotoedit">Bulk Photo Editing </Link>
                    </div>
                  </div>
                </div>
              </Nav.Link>

              <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "#000000" }}
                  to="/price"
                >
                  PRICE
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "#000000" }}
                  to="/payment"
                >
                  PAYMENT
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "#000000" }}
                  to="/contactus"
                >
                  CONTACT US
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
