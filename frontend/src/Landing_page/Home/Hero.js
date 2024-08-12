import React from "react";
import '../CSS/main.css';
import SubmitButton from "../common_components/SubmitBtn";


function Hero() {
  return (
    <div className="container text-center">
        <div className="row flex flex-wrap items-center justify-center hero align-center">
            <img src="images/homeHero.png" alt="home page hero section" className="h-auto w-[100vh] mt-32 max-mb-24 min-mb-16 "/>
            <h1 className="text-[5vh] font-medium text-gray-700">Invest in Everything</h1>
            <h5 className="text-[3vh] mb-8">Online platform to invest in stocks, derivatives, mutual funds, ETFs,bonds, and more.</h5>
            <SubmitButton /> 
        </div>
    </div>
  );
}

export default Hero;
