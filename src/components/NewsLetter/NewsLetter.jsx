import React,{Component} from 'react'
import Card from '../CardContents/CardUI';
import "../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";

class Newsletter extends Component {
    render(){
        return (
                <div className="container-fluid d-flex justify-content-center p-5" style={{background:"#301A6D",color:"white"}}>
                    <div className="row">
                        <div className="col-md-7 text-left m-0 p-0">
                            <h3>Signup to receive the latest news, services and events</h3>
                           
                        </div>
                        <div className="col-md-5">
                        <a href="#" className="btn btn-outline-secondary btn-sm mt-3" style={{background:'#301A6D',color:'white',borderRadius:'15px'}}>Newsletter signup</a>
                        </div>
                       
                    </div>
                </div>
        );
    }
}

export default Newsletter;