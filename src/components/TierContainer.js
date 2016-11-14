import React,{Component} from 'react';
import tierStyle from './tiercontainer.css';
import TierRow from './TierRow';

export default class TierContainer extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let heightVal = `${this.props.layout[0]}%`;
        let style = {
            height: heightVal
        };

        let tiers = Object.keys(this.props.tiers),
            noOfTiers = tiers.length,
            rowHeightVal = 100/noOfTiers;
        let rows = [];
        let yAxisItems = [];
        for(let tier in this.props.tiers){
            rows.push(<TierRow key={tier} heightVal={rowHeightVal} item={this.props.tiers[tier]} {...this.props} />);
            yAxisItems.push(<div style={{height: rowHeightVal}} className={tierStyle.yAxisLabel}>
                {tier}
            </div>);
        }

        return (
            <div style={style} className={tierStyle.main}>
                <div style={{width: this.props.yAxisWidth}} className={tierStyle.yAxis}>
                    {yAxisItems}
                </div>
                <div className={tierStyle.colWrapper}>
                    {rows}                       
                </div>
            </div>
        )
    }
}