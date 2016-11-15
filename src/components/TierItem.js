import React,{Component} from 'react';
import tierItemStyle from './tieritem.css';

export default class TierItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let style = {
            width: `${this.props.widthVal}%`,
            paddingLeft: `${(this.props.widthVal/2)-10}%`
        }
        return (<div style={style} className={tierItemStyle.main}>
                {this.props.item.promotionName}
        </div>)
    }
}