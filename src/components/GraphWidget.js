import React,{Component} from 'react';
import graphStyle from './graphwidget.css';
import PriceGraph from './PriceGraph';
import TierContainer from './TierContainer';
import GraphFooter from './GraphFooter';


export default class GraphWidget extends Component {
    constructor(props){
        super(props)
    }
    render(){
       let columns = [];
       let width = 100/this.props.noOfDays;
       
       let widthVal = `${width}%`;
       for(let i=0;i<this.props.noOfDays;i++){
           columns.push(
               <div key={i} style={{width: widthVal}} className={graphStyle.dayCol}>
                
               </div>
               )
       }
       return(
            <div className={graphStyle.main}>
                <div style={{width: this.props.yAxisWidth}} className={graphStyle.yAxis}></div>
                <div className={graphStyle.colWrapper}>
                    {columns}                    
                </div>
                <TierContainer {...this.props} /> 
                <PriceGraph {...this.props} />                
                <GraphFooter {...this.props} />                        
            </div>
       ) 
    }
}
