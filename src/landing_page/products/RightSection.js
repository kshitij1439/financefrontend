import React from "react";
function RightSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container pt-5">
      <div className="row m-3">
        <div className="col-6 ">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="p-3">
            <a href="">{tryDemo}</a>
            &nbsp;&nbsp;
            <a href="">{learnMore}</a>
          </div>

        </div>
        <div className="col-6">
          <img src={imageURL} alt="sec" style={{ width: "80%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
