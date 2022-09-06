import React from 'react'
import { NavLink } from 'react-router-dom';
import './style.css'
import DATA2 from '../../Data2'
// import img5 from '/public/assets/images/products/servicebg.jpg'
import img5 from '../../images/servicebg.jpg'
const ProductInc2 = () => {

    const cardItem = (item) => {
        return (
            <div className="   gx-2" key={item.id} style={{width: "13rem"}}>
                <img  src={item.img} class="card-img-top  m-auto" style={{height:'auto',width:'30%'}} alt={item.title}/>
                    <div>
                        <h5>{item.title}</h5> 
                    </div>                                    
            </div>
        );
    }

    return (
        <div className='serv d-flex justify-content-center align-items-center text-center'>
            <div className="container1">
                    <div className='service-header w-100 d-flex flex-row justify-content-center align-items-center'>
                        {/* <hr width="30%" style={{height:"2px", color:"white"}}/> */}
                        <div className="left-div"></div>
                        <div className="mid-div"><h1 className='service-title text-center'>Services</h1></div>
                        <div className="right-div"></div>
                        {/* <hr width="30%" style={{height:"2px", color:"white"}}/> */}
                    </div>
                    <div className="row justify-content-around" >
                        {DATA2.map(cardItem)}
                    </div>
            </div>
        </div>
    )   
}

export default ProductInc2
