import React,{Component} from 'react';
import GraphWidget from './GraphWidget';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            noOfDays: 5,
            yAxisWidth: 100,
            priceBarHeight: 50,
            layout: [20,60,20],
            tiers: {
                "Tier1": [
                    {
                        promotionName: "Best Buys",
                        startDate: 1,
                        endDate: 2,
                        price: 21.99,
                        percentOff: 45
                    }
                ],
                "Tier2": [
                    {
                        promotionName: "Midweek Sale",
                        startDate: 2,
                        endDate: 3,
                        price: 21.99,
                        percentOff: 45
                    }
                ]
            },
            priceGraphVal: [
                [1,1,21.99,38],
                [2,2,17.99,45],
                [3,4, 14.99,50],
                [5,5,24.99,30]
            ],
            priceGraphMinValue: 14.99,
            bottomTable: [
                ['04/28',22.99,5],
                ['04/29',22.99,10],
                ['04/30',24.99,15],
                ['05/12',23.99,10],
                ['05/13',24.99,7]
            ],
            events: [
                {
                    start: 1,
                    end: 3,
                    details: 'event1'
                },
                {
                    start: 2,
                    end: 3,
                    details: 'event2'
                }
            ]
        }
    }
    onPriceChange(indexOfItem, val){
        var changedVal = this.state.priceGraphVal.map((item, index)=> {
            if(indexOfItem === index){
                item[2] = parseFloat(val.price);
                item[3] = parseFloat(val.discount);
            }
            return item;
        });
        this.setState({
            priceGraphVal: changedVal
        });
        console.log('parent price change');
    }
    render(){
        return (
                <GraphWidget {...this.state} onPriceChange={this.onPriceChange.bind(this)} />
        )
    }
}