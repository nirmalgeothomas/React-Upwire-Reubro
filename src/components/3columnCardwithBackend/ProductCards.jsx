import React from 'react'
import { NavLink } from 'react-router-dom';
import './style.css'
import DATA1 from '../../Data1'

const ProductInc = () => {

    const cardItem = (item) => {
        return (
            <div class="card my-5 py-4 p-3 gx-2" key={item.id} style={{width: "16rem"}}>
                <img  src={item.img} className="card-img-top" style={{height:'auto',width:'40%'}} alt={item.title}/>
                    <div class=" text-start">
                        <h5 class="card-title text-start">{item.title}</h5>
                        <p className="lead" style={{fontSize:"1rem"}}>{item.desc}</p>
                        <NavLink to={`/products/${item.id}`}  className="btn btn-outline-secondary btn-sm Prodbtn" style={{background:'white',color:'#301A6D',borderRadius:'15px'}}>Get Started</NavLink>
                       
                    </div>                                    
            </div>
                );
    }

                return (
                <div>
                    <div className="container ">
                        <div className="row">
                            <div className="col-12 text-center">
                             
                                
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-around">
                            {DATA1.map(cardItem)}
                        </div>
                    </div>
                </div>
                )
}

                export default ProductInc
