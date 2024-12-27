import React from 'react';
import Awards from './Awards';
import Hero from './Hero';
import Stats from './Stats';
import OpenAccount from '../OpenAccount';
import Education from './Education';
import Pricing from './Pricing';


function HomePage() {
    return ( 
        <>
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>      
        </>
     );
}

export default HomePage;