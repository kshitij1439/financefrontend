import React from 'react';
function CreateTicket() {
    return ( 
        <div className='container'>
                <h3 className='text-muted'>To create a ticket, select a relevant topic</h3>
                <br/><br/><div className='row'>
                <div className='col-4'>
                    <a href=''><h5><i class="fa-solid fa-plus"></i> Account Opening</h5></a><br/>
                    <a href=''>Getting started</a><br/>
                    <a href=''>Online</a><br/>
                    <a href=''>Offline</a><br/>
                    <a href=''>Charges</a><br/>
                    <a href=''>Company, Partnership and HUF</a><br/>
                    <a href=''>Non Resident Indian (NRI)</a><br/>
                </div>
                <div className='col-4'>
                <a href=''> <h5><i class="fa-solid fa-user"></i>  Login credentials</h5></a><br/>
                <a href=''>Your Profile</a><br/>
                <a href=''>Account modification and segment addition</a><br/>
                <a href=''>CMR & DP ID</a><br/>
                <a href=''>Nomination</a><br/>
                <a href=''>Transfer and conversion of shares</a><br/>
                </div>
                <div className='col-4'>
                    <a href=''><h5><i class="fa-solid fa-chart-simple"></i>  Trading and Markets</h5></a><br/>
                    <a href=''>Trading FAQs</a><br/>
                    <a href=''>Kite</a><br/>
                    <a href=''>Margins</a><br/>
                    <a href=''>Product and order types</a><br/>
                    <a href=''>Corporate actions</a><br/>
                    <a href=''>Kite features</a><br/>
                </div>
            </div>

            <br/><br/>


            <div className='row'>
                <div className='col-4'>
                    <a href=''><h5> <i class="fa-solid fa-file-invoice"></i>  Funds</h5></a><br/>
                    <a href=''>Fund withdrawal</a><br/>
                    <a href=''>Adding funds</a><br/>
                    <a href=''>Adding bank accounts</a><br/>
                    <a href=''>eMandates</a><br/>
                </div>
                <div className='col-4'>
                <a href=''> <h5><i class="fa-solid fa-at"></i>  Controls</h5></a><br/>
                <a href=''>IPO</a><br/>
                <a href=''>Portfolio</a><br/>
                <a href=''>Funds statement</a><br/>
                <a href=''>Profile</a><br/>
                <a href=''>Reports</a><br/>
                <a href=''>Referral program</a><br/>
                </div>
                <div className='col-4'>
                    <a href=''><h5><i class="fa-solid fa-money-bill"></i>  Coins</h5></a><br/>
                    <a href=''>Understanding mutual funds and Coin</a><br/>
                    <a href=''>Coin app</a><br/>
                    <a href=''>Coin web</a><br/>
                    <a href=''>Transactions and reports</a><br/>
                    <a href=''>National Pension Scheme (NPS)</a><br/>
     </div>
            </div>
        </div>
     );
}

export default CreateTicket;