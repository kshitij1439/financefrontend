import React from 'react';
function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row  align-items-center '>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5 img-fluid object-fit-cover'/>
            </div>
            <div className='text-center'>
                <h1 className='mt-5 text-center'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button style={{width:"25%",margin:"0 auto"}} className='p-3 btn btn-primary'>Sign up for free</button>
            </div>
        </div>
     );
}

export default Hero;