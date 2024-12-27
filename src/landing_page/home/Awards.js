import React from 'react';

function Awards() {
    return (
        <div className="container">
            <div className="row p-5">
                <div className="col-12 col-md-6 mb-4 mb-md-0">
                    <img 
                        src="media/images/largestBroker.svg" 
                        alt="Largest Stock Broker in India" 
                        className="img-fluid" 
                    />
                </div>
                <div className="col-12 col-md-6 p-5">
                    <h1 className="mb-4">Largest stock broker in India</h1>
                    <p className="mb-4">
                        2+ million Zerodha clients contribute to over 15% of all the volumes in India daily by trading and investing in:
                    </p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li><p>Futures and Options</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                    </div>
                    <img 
                        src="media/images/pressLogos.png" 
                        alt="Press Logos" 
                        style={{width: "90%", marginTop: "30px"}} 
                        className="img-fluid" 
                    />
                </div>
            </div>
        </div>
    );
}

export default Awards;
