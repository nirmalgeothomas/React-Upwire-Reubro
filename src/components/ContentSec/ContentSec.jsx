import React,{Component} from 'react'
import ContentSecUI from './ContentSecUI';
import ContentSecUI2 from './ContentSecUI2';

class ContentSec extends Component {
    render(){
        return (
                <div className="container-fluid d-flex justify-content-center mt-5 mb-5 "style={{border: '1px solid ', borderRadius: '30px',background:"#301A6D"}}>
                    <div className="row">
                        <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-5" ><ContentSecUI/></div>
                            <div className="col-md-7" ><ContentSecUI2/></div>
                        </div>
                        </div>
                    </div>
                 </div>            
        );
    }
}

export default ContentSec;