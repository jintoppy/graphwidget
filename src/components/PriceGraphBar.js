import React,{Component} from 'react';
import priceGraphBarStyle from './pricegraphbar.css';


export default class PriceGraphBar extends Component {
    constructor(props){
        super(props);
    }
    render(){
        let widthVal = `${this.props.currWidth}%`;
        //let topVal = `${this.props.yIndex*this.props.priceBarHeight*2}px`;
        let topVal = this.props.topPercentage? `calc(${this.props.topPercentage}% - ${this.props.priceBarHeight}px)`: 0;
        let leftLine, rightLine;
        if(this.props.rightLineDetails){
            let heightVal = `calc(${this.props.rightLineDetails.nextItemTopPercentage - this.props.topPercentage}% - ${this.props.priceBarHeight}px)`;
            let style = {
                height: heightVal,
                top: this.props.topPercentage? `calc(${this.props.topPercentage}%`: 0,
                left: '100%'
            };
            rightLine = <div style={style} className={priceGraphBarStyle.line}></div>
        }

        if(this.props.leftLineDetails){
            let heightVal = `calc(${this.props.leftLineDetails.prevItemTopPercentage - this.props.topPercentage}% - ${this.props.priceBarHeight*2}px)`;
            let style = {
                height: heightVal,
                top: this.props.topPercentage? `calc(${this.props.topPercentage}% + ${this.props.priceBarHeight}px`: `${this.props.priceBarHeight}px`,
                left: '-1px'
            };
            leftLine = <div style={style} className={priceGraphBarStyle.line}></div>
        }
        let barStyle = {
            height: this.props.priceBarHeight,
            width: widthVal,
            top: topVal
        };
        return (
            <div className={priceGraphBarStyle.container}>
                <div style={barStyle} className={priceGraphBarStyle.main}>
                    ${this.props.item[2]}
                    <br/>
                    {this.props.item[3]}% off
                    <i className={priceGraphBarStyle.icon} />
                </div>
                {leftLine}
                {rightLine}
            </div>
            
        )
    }
}