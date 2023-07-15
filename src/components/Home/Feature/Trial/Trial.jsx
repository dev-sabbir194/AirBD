import { Link } from "react-router-dom";
import "./Trial.css";
const Trial = () => {
  return (
    <div>
      <div className="image-background">
        <div className="text">
          <h1 className="title" style={{ fontWeight: "800" }}>
            GET YOUR FIRST TRIAL
          </h1>
          <div className="section-title-dots text-center">
            <span style={{ background: "#ffffff" }}></span>
            <span style={{ background: "#ffffff" }}></span>
            <span style={{ background: "#ffffff" }}></span>
            <span style={{ background: "#ffffff" }}></span>
          </div>
          <h3 className="text-white mt-3 mb-3" style={{ fontWeight: "800" }}>
            Don't easily trust or rely on commercial boasts
          </h3>
          <h3 style={{ fontWeight: "800" }}>
            You hold the authority to make your own judgment
          </h3>
          <Link to="/getaquote">
            <button className="trial-button mt-3">GET YOUR FIRST TRIAL</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Trial;
