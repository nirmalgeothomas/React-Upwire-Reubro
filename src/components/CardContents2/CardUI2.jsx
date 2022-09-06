import React from 'react'
import img1 from '../../images/profile1.png'
import "../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";

const CardUI2 = props => {
  return (
    <div className="card text-center">
        <div className="overflow">
            <img src={img1} alt="image1" />
        </div>
        <div className="card-body text-dark">
            <div className="card-title text-start">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, consequatur fugit. Quasi minus dolorem repellat exercitationem in facilis eos vitae!</p>
            <a href="#" className="btn btn-outline-success ">Get Started</a>
            </div>
        </div>
    </div>
  );
};

export default CardUI2