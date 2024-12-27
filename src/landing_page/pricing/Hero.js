import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='text-center pb-5 mb-5'>
                <h1>Charges</h1>
                <h4 className='text-muted'>List of all charges and taxes</h4>
            </div>
            <div className='row text-center'>
                <div className='col-4'>
                    <img style={{width:"80%"}} src='media/images/pricing0.svg'/>
                    <h4>Free equity delivery</h4>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4'>
                    <img style={{width:"80%"}} src='media/images/intradayTrades.svg'/>
                    <h4>Intraday and F&O trades</h4>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4'>
                    <img style={{width:"80%"}} src='media/images/pricing0.svg'/>
                    <h4>Free direct MF</h4>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;