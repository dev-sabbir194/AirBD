const SectionTitle = ({
  heading,subHeading,details}) => {
  return (
    <div className="col-lg-12">
      <div className="section-title text-center">
        <h2 className="company-text">{heading}</h2>
        <h2 style={{ fontWeight: "700", fontSize: "45px" }}>{subHeading}</h2>
        <p className="" style={{ width: "85%", fontWeight: "500", fontSize: "18px", marginLeft:'8%' }}>
          {details}
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;
