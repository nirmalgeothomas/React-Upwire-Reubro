import React,{Component} from 'react'
import Card from './CardUI2';
import img6 from '../../images/profile2.png'
import CardUI2 from './CardUI2';
import Product from '../4columCardwithBackend/Product';
import ProductInc from '../3columnCardwithBackend/ProductCards';
import img9 from '../../images/kcw.png'

class Cards extends Component {
    render(){
        return (
                <div className="container-fluid justify-content-center ">
                    <div className="row">
                        <div className="col-md-3 mt-5">
                            <div className=" text-center">
                                
                                <div className="overflow card-body text-dark w-100">
                                    <div className="card-title" >
                                        <img src={img9} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                                <div className="col-md-9 ">
                                <ProductInc/>
                                </div>
                    </div>
                </div>
        );
    }
}

export default Cards;