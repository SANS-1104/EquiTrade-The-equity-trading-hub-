import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage'
import OpenAcc from '../common_components/OpenAcc';

function PricingPage() {
    return (  
        <>
            <Hero />
            <OpenAcc />
            <Brokerage />
        </>
    );
}

export default PricingPage;