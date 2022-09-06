import React from 'react'
import img1 from '../../images/profile2.png'
import "../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckSquare} from '@fortawesome/fontawesome-free-regular'
import {faCheck} from '@fortawesome/fontawesome-free-solid'

// import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'



const ContentSecUI2 = props => {
  return (
    <div className="text-center">
        <div className="overflow">
        <div className="body text-dark">
            <div className="title d-flex flex-column justify-content-start text-start" style={{color:"white",fontSize:"1.5rem"}}>
              <h4 className="mt-5 mb-5">Innovative Sourcing & Lending Platform</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus fugit omnis accusamus in vero maxime eligendi ipsum explicabo laboriosam, porro, voluptate odio doloremque minima exercitationem illum facere placeat libero ipsam ea sapiente quia accusantium. Porro?</p>
              <i><FontAwesomeIcon icon={faCheck}  style={{color:"white",fontSize:"1.5rem",fontFamily:"Inter"}} />Loan Sourcing</i>
              <i><FontAwesomeIcon icon={faCheck}  style={{color:"white",fontSize:"1.5rem",fontFamily:"Inter"}} />Intelligent Lending</i>
              <i><FontAwesomeIcon icon={faCheck}  style={{color:"white",fontSize:"1.5rem",fontFamily:"Inter"}} />All In One Financing</i>
              <i><FontAwesomeIcon icon={faCheck}  style={{color:"white",fontSize:"1.5rem",fontFamily:"Inter"}} />Material And Labour Payout</i>
             
            
            
             {/* <i className="fa-duotone fa-bus-alt"></i> */}
            </div>
        </div>
        </div>
       
    </div>
  );
};

export default ContentSecUI2