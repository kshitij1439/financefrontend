import React from "react";
function Team() {
    return ( 
    <div className="container p-4">
      <div className="text-center mx-5 ">
        <h1>
          People
        </h1>
      </div>
      <div className="row mt-5 m-2 text-center">
        <div className="col-6">
          <img src="media/images/nithinKamath.jpg" alt="people" style={{width:"80%", borderRadius:"100%"}}/>
          <h4>Nithin Kamath
          </h4>
          <h5>Founder, CEO</h5>
        </div>
        <div className="col-6">
          <p>
          Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
<br/><br/>
He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
<br/><br/>
Playing basketball is his zen.
<br/><br/>
Connect on Homepage / TradingQnA / Twitter
          </p>
        </div>
      </div>
    </div>
     );
}

export default Team;