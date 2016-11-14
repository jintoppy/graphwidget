import React,{Component} from 'react';
import footerStyle from './graphfooter.css';


export default class GraphFooter extends Component {
    constructor(props){
        super(props);
    }
    render(){
        let style = {
            top: `${this.props.layout[0]+this.props.layout[1]}%`,
            height: `${this.props.layout[2]}%`
        }

       let width = 100/this.props.noOfDays;
       
       let widthVal = `${width}%`;

       let columns = this.props.bottomTable.map((data,i) => {
           return (
               <div key={i} style={{width: widthVal}} className={footerStyle.col}>
                        <div className={footerStyle.label}>{i+1}</div>
                        <div className={footerStyle.label}>{data[0]}</div>
                        <div className={footerStyle.label}>{data[1]}</div>
                        <div className={footerStyle.label}>{data[2]}%</div>
                </div>
           )
       });
        

        return (<div style={style} className={footerStyle.main}>
             <div style={{width: this.props.yAxisWidth}} className={footerStyle.yAxis}>
                    <div className={footerStyle.yAxisLabel}>Ty</div>
                    <div className={footerStyle.yAxisLabel}>LY Plan Off</div>
                    <div className={footerStyle.yAxisLabel}>LY Plan Off Price</div>
                    <div className={footerStyle.yAxisLabel}>Off Units Share</div>
            </div>
            <div className={footerStyle.colWrapper}>
                    {columns}                    
            </div>
        </div>)
    }
}