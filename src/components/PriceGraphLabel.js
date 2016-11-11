import React,{Component} from 'react';
import priceGraphLabelStyle from './pricegraphlabel.css';

export default class PriceGraphLabel extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let top = this.props.yIndex===0? 10: (this.props.yIndex*100)+20;
        let topVal = `${top}px`;
        return (
            <div style={{top: topVal}} className={priceGraphLabelStyle.main}>
                {this.props.label}
            </div>
        )
    }
}