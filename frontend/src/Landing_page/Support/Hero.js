import React from "react";
import "../CSS/main.css";

function Hero() {
  return (
    <div className="support-biggest-container mb-20 w-full">
      <div className="container w-full support-outer-box mt-20 ">
        <div className="container support-inner-box w-4/5 mb-16">
          <div className="row support-titles mt-8 flex flex-wrap justify-between items-center w-full">
            <div className="w-fit title1">Support Portal</div>
            <div className="w-fit title2">
              <a href="#">Track Tickets</a>
            </div>
          </div>
          <div className="row mt-12 support-content flex flex-wrap items-center justify-start mr-4">
            <div className="support-column flex flex-col flex-wrap items-start w-1/2">
              <div className="searchTitle">
                <h2>
                  Search for an answer or browse help topics to create a ticket
                </h2>
              </div>
              <div className="searchBox w-full mb-4">
                <form role="search">
                  <div className="full-search w-full flex flex-wrap justofy-start items-center rounded-lg bg-white">
                    <input
                      className="searchbox w-full py-2 px-4 text-lg rounded-lg text-black"
                      placeholder="Eg. how do i activate F&O, why is my order getting rejected..."
                    />
                  </div>
                </form>
              </div>
              <div className="superLinks flex flex-wrap justify-start items-start">
                <div className="w-fit each-superLink">
                  <a href="#">Track Account Opening</a>{" "}
                </div>
                <div className="w-fit each-superLink">
                  <a href="#">Track Segment Activation</a>{" "}
                </div>
                <div className="w-fit each-superLink">
                  <a href="#">Intraday Margins</a>{" "}
                </div>
                <div className="w-fit each-superLink">
                  <a href="#">Kite User Manual</a>{" "}
                </div>
              </div>
            </div>

            <div className="support-column w-1/2" ml-4>
              <div className="Featured">Featured</div>
              <div className="extraLinks pl-4">
                <div>
                  <li>Surveillance measure on scrips - August 2024</li>
                  <li>Latest Intraday leverages and Square-off timings</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
