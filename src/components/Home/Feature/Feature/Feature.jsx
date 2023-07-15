import Ecard from "../Ecommerce/Ecard/Ecard";
import Ecommerce from "../Ecommerce/Ecommerce";
import Prices from "../Prices/Prices";
import Trial from "../Trial/Trial";
import WorkingProcess from "../WorkingProcess/WorkingProcess";

const Feature = () => {
  return (
    <div>
      <div className="mt-5">
        <Ecommerce></Ecommerce>
        <Ecard></Ecard>
      </div>
      <div className="mt-5">
        <Prices></Prices>
      </div>
      <div className="mt-5">
        <WorkingProcess></WorkingProcess>
      </div>
      <div>
        <Trial></Trial>
      </div>
    </div>
  );
};

export default Feature;
