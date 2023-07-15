import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { GiShoppingCart } from "react-icons/gi";
import { SiMinutemailer } from "react-icons/si";
import { AiFillLike } from "react-icons/ai";
import CountUp from "react-countup";

const Countdown = () => {
  return (
    <div>
      <div className="bg-black mt-5 text-white" style={{ height: "auto" }}>
        <div className="count-up-section d-flex flex-wrap gap-5 mt-2 justify-content-center">
          <div className="count-up-item text-center mb-4">
            <LiaMoneyBillWaveAltSolid
              className="text-center"
              style={{ width: "60px", height: "60px", color: "#ffcf46" }}
            />
            <h2>Price Starts From</h2>
            <h1>
              <CountUp
                start={20}
                end={99}
                duration={10}
                style={{ color: "#9ACD66" }}
              />
              <span style={{ color: "#9ACD66", fontSize: "30px" }}>¢</span>
            </h1>
            <p>Per Image</p>
          </div>
          <div className="count-up-item text-center mb-4">
            <GiShoppingCart
              className="text-center"
              style={{ width: "60px", height: "60px", color: "#cf472a" }}
            />
            <h2>Get Big Discount</h2>
            <h1>
              <CountUp
                start={1}
                end={25}
                duration={10}
                style={{ color: "#9ACD66" }}
              />
              <span style={{ color: "#9ACD66", fontSize: "30px" }}>%</span>
            </h1>
            <p>on bulk order</p>
          </div>
          <div className="count-up-item text-center mb-4">
            <SiMinutemailer
              className="text-center"
              style={{ width: "60px", height: "60px", color: "#02b374" }}
            />
            <h2>We Can Deliver</h2>
            <h1>
              <CountUp
                start={500}
                end={5000}
                duration={5}
                style={{ color: "#9ACD66" }}
              />
              <span style={{ color: "#ffcf46", fontSize: "20px" }}>
                images/day
              </span>
            </h1>
            <p>2500+ images in 12 hours</p>
          </div>
          <div className="count-up-item text-center mb-4">
            <AiFillLike
              className="text-center"
              style={{ width: "60px", height: "60px", color: "#5e4485" }}
            />
            <h2>Comprehensive QA</h2>
            <h1>
              <CountUp
                start={1}
                end={6}
                duration={5}
                style={{ color: "#9ACD66" }}
              />
              <span style={{ color: "#9ACD66", fontSize: "30px" }}>+</span>
            </h1>
            <p>Steps</p>
          </div>
          {/* Add more count-up items */}
        </div>
      </div>
    </div>
  );
};

export default Countdown;
