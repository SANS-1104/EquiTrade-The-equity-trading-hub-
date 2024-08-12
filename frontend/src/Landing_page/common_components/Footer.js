import React from "react";
import "../CSS/main.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter,faSquareFacebook,faInstagram,faLinkedin,faYoutube,faWhatsapp,faTelegram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="footer-container flex w-full flex-wrap justify-center pb-16">
      <div className="footer flex flex-wrap w-4/5 justify-center items-center">
        <div className="upper-footer w-full flex flex-wrap justify-center">
          <div className="w-1/4 responsive-footer each-column flex flex-col flex-wrap">
            <div className="heading-footer"><img src='images/zerodhaLogo2.png' alt="Logo" className='footer-logo'/></div>
            <div className="data-footer">
              &copy; 2010 - 2024, Zerodha Broking Ltd. <br /> All rights
              reserved.
            </div>
            <div className="flex flex-wrap upper-icons-footer">
              <div className="indi-icon"><a href="#"><FontAwesomeIcon icon={faXTwitter} /></a></div>
              <div className="indi-icon"><a href="#"><FontAwesomeIcon icon={faSquareFacebook} /></a></div>
              <div className="indi-icon"><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></div>
              <div className="indi-icon"><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></div>
            </div>
            <div className="line-partition"></div>
            <div className="flex flex-wrap lower-icons-footer">
              <div className="indi-icon"><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></div>
              <div className="indi-icon"><a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a></div>
              <div className="indi-icon"><a href="#"><FontAwesomeIcon icon={faTelegram} /></a></div>
            </div>
          </div>
          <div className="w-1/4 responsive-footer each-column flex flex-col flex-wrap">
            <div className="heading-footer">Company</div>
            <div className="data-footer">
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Referral Programme</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Zerodha.tech</a>
                </li>
                <li>
                  <a href="#">Press & Media</a>
                </li>
                <li>
                  <a href="#">Zerodha Cares (CSR)</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/4 responsive-footer each-column flex flex-col flex-wrap">
            <div className="heading-footer">Support</div>
            <div className="data-footer">
              <ul>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Support Portal</a>
                </li>
                <li>
                  <a href="#">Z-Connect Blog</a>
                </li>
                <li>
                  <a href="#">List of Charges</a>
                </li>
                <li>
                  <a href="#">Downloads & Resources</a>
                </li>
                <li>
                  <a href="#">Videos</a>
                </li>
                <li>
                  <a href="#">Market Overview</a>
                </li>
                <li>
                  <a href="#">How to file a complaint?</a>
                </li>
                <li>
                  <a href="#">Status of your Complaints</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/4 responsive-footer each-column flex flex-col flex-wrap">
            <div className="heading-footer">Account</div>
            <div className="data-footer">
              <ul>
                <li>
                  <a href="#">Open an Account</a>
                </li>
                <li>
                  <a href="#">Fund Transfer</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container lower-footer w-full">
          <div className="row mt-8 mb-2 footer-disclaimer">
            <p>
              Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt.
              Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238
              Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
              Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
              Bengaluru - 560078, Karnataka, India. For any complaints
              pertaining to securities broking please write to
              complaints@zerodha.com, for DP related to dp@zerodha.com. Please
              ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>
          </div>
          <div className="row   mb-2 footer-disclaimer">
            <p>
              Procedure to file a complaint on SEBI SCORES: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>
          </div>
          <div className="row   mb-2 footer-disclaimer">
            <p>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>
          </div>
          <div className="row   mb-2 footer-disclaimer">
            <p>
              Attention investors: 1 Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2 Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3 Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>
          </div>
          <div className="row   mb-2 footer-disclaimer">
            <p>
              *Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please create a ticket here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
