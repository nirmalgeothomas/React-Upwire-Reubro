import React from 'react'
import { NavLink } from 'react-router-dom';
import DATA from '../../Data'
import './style.css'
// const styles = {
//     header: {
//         boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset"
//     }
//   };
const Product = () => {

    const cardItem = (item) => {
        return (
            <div class=" relative cardshadow" key={item.id} style={{width: "16rem"}}>
                <img src={item.img} class="card-img-top" alt={item.title}/>
                
                    <div class="card-body text-start " style={{position:'relative',top:'-10rem'}}>
                        <h5 class="card-title" style={{color:'white',marginLeft:'5px'}}>{item.title}</h5>
                        
                        <NavLink to={`/products/${item.id}`}  className="btn btn-outline-secondary btn-sm prodbtn mt-3" style={{color:'white',borderRadius:'15px',marginLeft:'10px'}}>More</NavLink>
                    </div> 

                    
                                                 
</div>
                );
    }

                return (
                <div>
                    <div className="container ">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1>Our Activities</h1>
                                
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-around">
                            {DATA.map(cardItem)}
                        </div>
                    </div>
                </div>
                )
}

                export default Product
