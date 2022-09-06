import React from "react";
import "./Footer.css";
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHatchef} from '@fortawesome/fontawesome-free-solid'



function Footer1() {
  return (
    <div className="main-footer" style={{background: 'background: #393939;'}}>
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <img src={logo} alt="" />
            <h1 className="list-unstyled"> </h1>
            <ui className="list-unstyled">
              <li>Minimizing Time,Maximizing Profitability</li>
              <li>Hours,M-F 9:00 AM EST-4:00pm EST</li>
              </ui>
            
        
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Explore</h4>
            <ui className="list-unstyled">
              <li>Home</li>
              <li>About Us</li>
              <li>Core Customers </li>
              <li>Product</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <br />
            <ui className="list-unstyled">
              <li>Services</li>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ui>
          </div>
          <div className="col">
            <h4>Connect</h4>
            <ui className="list-unstyled">
              <li>Info@upwireme.com</li>
              <li>1-844-628-0074</li>
            
         

  
              
              
            </ui>
          </div>
        </div>
        <br />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} 2022 Upwire | 300 South 3rd Street, Lauderdale FL 33301
         
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer1;