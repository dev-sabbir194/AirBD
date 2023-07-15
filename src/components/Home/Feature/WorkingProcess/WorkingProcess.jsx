
import SectionTitle from "../../../../pages/Shared/SectionTitle/SectionTitle";
import "./WorkingProcess.css";

const WorkingProcess = () => {
  return (
    <div className="working-process">
      <div className="row justify-content-center section-title">
        <SectionTitle
          heading="AirBD"
          subHeading="WORKING PROCESS"
          details=" This visual representation will help you to get a better understanding of our bulk photo editing service process."
        ></SectionTitle>
        <div className="section-title-dots text-center">
          <span style={{ background: "#6ca86a" }}></span>
          <span style={{ background: "#eca817" }}></span>
          <span style={{ background: "#3da2d8" }}></span>
          <span style={{ background: "#005374" }}></span>
        </div>
      </div>
      <div className="text-section">
        <div className="text-block">
          <div
            className="bg-image"
            style={{
              backgroundImage:
                "url('https://cdn.colorexpertsbd.com/wp-content/uploads/2022/01/get-quote.png')",
              border: "1px solid #ddd",
            }}
          >
            <div className="text-border">
              <h1
                className="text"
                style={{
                  fontSize: "35px",
                  fontWeight: "700",
                  color: "#63B855",
                }}
              >
                GET <br />
                PRICE QUOTE
              </h1>
            </div>
          </div>
        </div>

        <div className="text-block">
          <div
            className="bg-image"
            style={{
              backgroundImage:
                "url('https://cdn.colorexpertsbd.com/wp-content/uploads/2022/01/upload-images.png')",
              border: "1px solid #ddd",
            }}
          >
            <div className="text-border">
              <h1
                className="text"
                style={{
                  fontSize: "35px",
                  fontWeight: "700",
                  color: "#F4C936",
                }}
              >
                UPLOAD <br /> YOUR FILES
              </h1>
            </div>
          </div>
        </div>
        <div className="text-block">
          <div
            className="bg-image"
            style={{
              backgroundImage:
                "url('https://cdn.colorexpertsbd.com/wp-content/uploads/2022/01/download-images.png')",
              border: "1px solid #ddd",
            }}
          >
            <div className="text-border">
              <h1
                className="text"
                style={{
                  fontSize: "35px",
                  fontWeight: "700",
                  color: "#3DA2D8",
                }}
              >
                DOWNLOAD <br /> EDITED FILES
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
