import React from 'react';
function Hero() {
    return ( 
        <section className='container-fluid space-endly p-5 mb-5' id='supporthero'>
            <div className='row' id='supportwrapper'>
                <h5>Support Portal</h5>
                <h6><a href=''>Track tickets</a></h6>
            </div>
            <div className='row ml-5'>
                <div className='col-6'>
                    <h4>Search for an answer or browse help topics to create a ticket</h4>
                    <input placeholder='Eg: how do i activate F&O.....'/>
                    <a href=''>Track account opening </a>&nbsp;&nbsp;
                    <a href=''>Track segment activation </a>&nbsp;&nbsp;
                    <a href=''>Intraday margins </a>&nbsp;&nbsp;
                    <a href=''>Kite user manual</a>&nbsp;&nbsp;
                </div>
                <div className='col-6'>
                    <h5>Featured </h5>
                    <ol>
                        <a href=''><li>Surveillance measure on scrips - November 2024</li></a>
                        <a href=''><li> Latest Intraday leverages and Square-off timings</li></a>
                    </ol>
                </div>
            </div>

        </section>          
     );
}

export default Hero;