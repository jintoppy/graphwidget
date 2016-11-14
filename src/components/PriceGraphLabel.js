import React,{Component} from 'react';
import priceGraphLabelStyle from './pricegraphlabel.css';

export default class PriceGraphLabel extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let topVal = this.props.topPercentage? `calc(${this.props.topPercentage}% - ${this.props.priceBarHeight}px + ${this.props.priceBarHeight/2}px)`: 20;
        return (
            <div style={{top: topVal}} className={priceGraphLabelStyle.main}>
                ${this.props.label}
            </div>
        )
    }
}