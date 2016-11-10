import React,{Component} from 'react';
import GraphWidget from './GraphWidget';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            noOfDays: 5,
            yAxisWidth: 100,
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
                <GraphWidget 
                    events={this.state.events} 
                    yAxisWidth = {this.state.yAxisWidth}
                    noOfDays={this.state.noOfDays} />
        )
    }
}