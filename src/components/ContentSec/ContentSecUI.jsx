import React from 'react'
import img1 from '../../images/innosource.png'
import "../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";

const ContentSecUI = props => {
  return (
    <div className="text-center">
        <div className="overflow">
            <img className="p-2" src={img1} alt="image1" style={{height:'auto',width:'100%'}}/>
        </div>
       
    </div>
  );
};

export default ContentSecUI