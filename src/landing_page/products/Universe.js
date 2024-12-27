import React from "react";
function Universe() {
  return (
    <div className="contianer ">
      <div className=" text-center pt-5 ">
        <h1 className="mb-5">The Zerodha Universe</h1>
        <p className="mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="row px-5 text-small text-muted" >
          <div className="col-4 px-5 py-3">
            <img
              style={{width:"80%"}} src="media/images/zerodhaFundhouse.png"
              alt="zerodhafundhouse"
            />
            <p>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 px-5 py-3">
            <img style={{width:"80%"}} src="media/images/sensibullLogo.svg" alt="sensibull" />
            <p>
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-4 px-5 py-3">
            <img style={{width:"80%"}} src="media/images/streakLogo.png" alt="streak" />
            <p>
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
        </div>
        <div className="row px-5 text-small text-muted">
          <div className="col-4 px-5 py-3">
            <img style={{width:"80%"}} src="media/images/smallcaseLogo.png" alt="smallcase" />
            <p>
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4 px-5 py-3">
            <img style={{width:"80%"}} src="media/images/goldenpiLogo.png" alt="tijori" />
            <p>
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
          <div className="col-4 px-5 py-3">
            <img style={{width:"50%"}} src="media/images/dittoLogo.png" alt="ditto" />
            <p>
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>

        <button
          style={{ width: "25%", margin: "0 auto" }}
          className="p-3 btn btn-primary"
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
