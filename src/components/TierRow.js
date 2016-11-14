import React,{Component} from 'react';
import TierItem from './TierItem';
import tierRowStyle from './tierrow.css';

export default class TierRow extends Component{
    constructor(props){
        super(props);
    }
    render(){

       let columns = [];
       let width = 100/this.props.noOfDays;       
   
       for(let i=0;i<this.props.noOfDays;i++){
           let tierPromoComponent;
           let tierItem = this.props.item.find(function(promotion){
               return promotion.startDate === i+1;
           });
           
           if(tierItem){
               let widthVal = ((tierItem.startDate===tierItem.endDate? 1: tierItem.endDate - tierItem.startDate)+1)*100;
               tierPromoComponent  = <TierItem 
                                            item={tierItem} 
                                            key={i} 
                                            widthVal={widthVal} 
                                    />
           }
           columns.push(
                <div key={i} className={tierRowStyle.col}>
                    {tierPromoComponent}
                </div>
            );
       }
       let style = {
           height: `${this.props.heightVal}%`
       }
       return (
            <div style={style} className={tierRowStyle.main}>
                {columns}                       
            </div>
       )

    }
}