import React,{Component} from 'react';
import priceGraphBarStyle from './pricegraphbar.css';


export default class PriceGraphBar extends Component {
    constructor(props){
        super(props);
    }
    render(){
        let widthVal = `${this.props.currWidth}%`;
        let topVal = `${this.props.yIndex*100}px`;

        let leftLine, rightLine;
        if(this.props.rightLineDetails){
            let heightVal = this.props.rightLineDetails.heightDimension*50;
            let style = {
                height: heightVal,
                top: '100%',
                left: '100%'
            };
            rightLine = <div style={style} className={priceGraphBarStyle.line}></div>
        }

        if(this.props.leftLineDetails){
            let heightVal = (this.props.leftLineDetails.heightDimension*100)-50;
            let style = {
                height: heightVal,
                top: '100%',
                left: '-1px'
            };
            leftLine = <div style={style} className={priceGraphBarStyle.line}></div>
        }

        return (
            <div style={{width: widthVal, top: topVal}} className={priceGraphBarStyle.main}>
                {this.props.item[2]}
                {leftLine}
                {rightLine}
            </div>
        )
    }
}