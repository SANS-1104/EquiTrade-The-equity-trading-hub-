import React from 'react';
import Hero from './Hero';
import Universe from './Universe';
import LeftImg from './LeftImg';
import RightImg from './RightImg';

function ProductPage() {
    return (  
        <>
            <Hero />
            <LeftImg 
                imageURL='images/kite.png' 
                techName='Kite' 
                techDesc='Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.' 
                link1='https://play.google.com/store/apps/details?id=com.zerodha.kite3'
                link2 ='https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802' 
            />

            <RightImg 
                imageURL='images/console.png' 
                techName='Console' 
                techDesc='The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.' 
            />

            <LeftImg 
                imageURL='images/coin.png' 
                techName='Coin' 
                techDesc='Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.' 
                link1='https://play.google.com/store/apps/details?id=com.zerodha.coin'
                link2 ='https://apps.apple.com/in/app/zerodha-coin-mutual-funds/id1392892554' 
            />

            <RightImg 
                imageURL='images/kiteconnect.png' 
                techName='Kite Connect API' 
                techDesc='Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.' 
            />

            <LeftImg 
                imageURL='images/varsity.png' 
                techName='Varsity mobile' 
                techDesc='An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.' 
                link1='https://play.google.com/store/apps/details?id=com.zerodha.varsity'
                link2 ='https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753' 
            />
            
            <Universe />
        </>
    );
}

export default ProductPage;