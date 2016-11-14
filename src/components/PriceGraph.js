import React,{Component} from 'react';
import priceGraphStyle from './pricegraph.css';
import PriceGraphBar from './PriceGraphBar';
import PriceGraphLabel from './PriceGraphLabel';

export default class PriceGraph extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let columns = [];
       let width = 100/this.props.noOfDays;
       
       let widthVal = `${width}%`;
       let sortedArr = this.props.priceGraphVal.map((item) => item[2]).sort((a, b)=> b-a);

       let yAxisLabels=[];
       let availableDatesList = this.props.priceGraphVal.map((x) => x[0]);
       
       for(let i=0;i<sortedArr.length;i++){
           let topPercentage = (100/this.props.noOfDays) * i;
           yAxisLabels.push(<PriceGraphLabel 
                                key={i} 
                                yIndex={i} 
                                topPercentage={topPercentage}
                                label={sortedArr[i]} 
                                priceBarHeight={this.props.priceBarHeight}
                            />);
       }

       for(let i=0;i<this.props.noOfDays;i++){
           let previousItemFinder = (function(index){
               if(index===0){
                   return index;
               }
               if(availableDatesList.indexOf(index) > -1){
                   return index;
               }
               else{
                   let gotResult=false;
                   let lastIndex = index;
                   while(!gotResult){
                       if(availableDatesList.indexOf(lastIndex) > -1){
                           gotResult = true;
                       }
                       else{
                           lastIndex--;
                       }
                   }
                   return lastIndex;
               }

           })(i);


           let previousItemIndex = this.props.priceGraphVal.findIndex((val)=> {
               return val[0] === previousItemFinder;
           });

           let nextItemIndex = this.props.priceGraphVal.findIndex((val)=> {
               return val[0] === i+2;
           });

           let priceBarIndex = this.props.priceGraphVal.findIndex((val)=> {
               return val[0] === i+1;
           });
           
           let barItem;
           if(priceBarIndex > -1){
               let isPriceBarFound = this.props.priceGraphVal[priceBarIndex];
               let yIndex = sortedArr.indexOf(isPriceBarFound[2]);
               let widthOfBar = 100 * ((isPriceBarFound[1]-isPriceBarFound[0])+1);
               let topPercentage = (100/this.props.noOfDays) * yIndex;
               let rightLineDetails, leftLineDetails;
               //for Finding the next Item details
               if(nextItemIndex > -1){
                   let nextItem = this.props.priceGraphVal[nextItemIndex];
                   let nextItemYIndex = sortedArr.indexOf(nextItem[2]);
                   let nextItemTopPercentage = (100/this.props.noOfDays) * nextItemYIndex;
                   let heightOfItem = (nextItemTopPercentage-topPercentage) - this.props.priceBarHeight;
                   if(nextItemYIndex>yIndex){
                       rightLineDetails = {
                           heightDimension: nextItemYIndex - yIndex,
                           nextItemTopPercentage: nextItemTopPercentage,
                           heightOfItem: `calc(${nextItemTopPercentage-topPercentage}% - ${this.props.priceBarHeight}px)`
                       }
                   }
               }  

               //for Finding the previous item details
               if(previousItemIndex > -1){
                   let prevItem = this.props.priceGraphVal[previousItemIndex];
                   let prevItemYIndex = sortedArr.indexOf(prevItem[2]);
                   let prevItemTopPercentage = (100/this.props.noOfDays) * prevItemYIndex;
                   if(prevItemYIndex>yIndex){
                       leftLineDetails = {
                           heightDimension: prevItemYIndex - yIndex,
                           prevItemTopPercentage: prevItemTopPercentage
                       }
                   }
               }
               
               
               barItem =  <PriceGraphBar
                                topPercentage={topPercentage} 
                                yIndex={yIndex} 
                                indexOfItem={priceBarIndex} 
                                currWidth={widthOfBar} 
                                item={isPriceBarFound}
                                rightLineDetails={rightLineDetails}
                                leftLineDetails={leftLineDetails}
                                priceBarHeight={this.props.priceBarHeight}
                            />
           }
           columns.push(
               <div key={i} style={{width: widthVal}} className={priceGraphStyle.col}>
                    {barItem}
               </div>
               )
       }
        return (
            <div className={priceGraphStyle.container}>
                <div style={{width: this.props.yAxisWidth}} className={priceGraphStyle.yAxis}>
                        {yAxisLabels}
                </div>
                <div className={priceGraphStyle.colWrapper}>
                    {columns}                    
                </div>
            </div>
        )
    }
}