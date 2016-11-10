import React,{Component} from 'react';
import graphStyle from './graphwidget.css';
import GraphItem from './GraphItem';

export default class GraphWidget extends Component {
    constructor(props){
        super(props)
    }
    render(){
       let columns = [];
       let width = 100/this.props.noOfDays;
       
       let widthVal = `${width}%`;
       for(let i=0;i<this.props.noOfDays;i++){
           let isAnyEventStarting = this.props.events.find(function(event){
               return event.start === i+1;
           });
           let eventItem;
           if(isAnyEventStarting){
               eventItem = <GraphItem item={isAnyEventStarting}/>
           }
           columns.push(
               <div key={i} style={{width: widthVal}} className={graphStyle.dayCol}>
                
               </div>
               )
       }
       return(
            <div className={graphStyle.main}>
                <div style={{width: this.props.yAxisWidth}} className={graphStyle.yAxis}>This is the yAxis</div>
                <div className={graphStyle.colWrapper}>{columns}</div>                         
            </div>
       ) 
    }
}
