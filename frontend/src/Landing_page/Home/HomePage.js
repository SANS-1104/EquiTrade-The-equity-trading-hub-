import React from 'react';
import Hero from './Hero'
import Trust from './Trust'
import Pricing from './Pricing'
import Education from './Education'
import OpenAcc from '../common_components/OpenAcc'

function HomePage() {
    return ( 
        <>

            <Hero />
            <Trust />
            <Pricing />
            <Education />
            <OpenAcc />

        </>
     );
}

export default HomePage;