import React,{Component} from 'react';
import graphItemStyle from './graphitem.css';

export default class GraphItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className={graphItemStyle.container}>
                {this.props.item.detail}
            </div>
        )
    }
}