import React,{Component} from 'react';
import GraphWidget from './GraphWidget';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            noOfDays: 5,
            yAxisWidth: 100,
            priceBarHeight: 50,
            priceGraphVal: [
                [1,1,21.99,38],
                [2,2,17.99,45],
                [3,4, 14.99,50],
                [5,5,24.99,30]
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
    render(){
        return (
                <GraphWidget {...this.state} />
        )
    }
}