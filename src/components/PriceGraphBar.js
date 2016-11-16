import React,{Component} from 'react';
import priceGraphBarStyle from './pricegraphbar.css';


export default class PriceGraphBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            onEdit: false
        };
    }
    onEdit(){
        this.setState({
            onEdit: true
        });
    }
    onSave(e){
        if(e.key ==='Enter'){
            this.setState({
                onEdit: false
            });
            this.props.onPriceChange && this.props.onPriceChange({
                price: this.refs.price.value,
                discount: this.refs.discount.value
            });
        }
        
    }
    render(){
        let widthVal = `${this.props.currWidth}%`;
        //let topVal = `${this.props.yIndex*this.props.priceBarHeight*2}px`;
        let topVal = this.props.topPercentage? `calc(${this.props.topPercentage}% - ${this.props.priceBarHeight}px)`: 0;
        let leftLine, rightLine;
        if(this.props.rightLineDetails){
            let heightVal = `calc(${this.props.rightLineDetails.nextItemTopPercentage - this.props.topPercentage}% - ${this.props.priceBarHeight}px)`;
            let wrapperStyle = {
                transform: `translate(calc(100% - 1px),${this.props.priceBarHeight}px)`
            };
            let style = {
                height: heightVal
            };
            rightLine = (<div style={wrapperStyle} className={priceGraphBarStyle.lineWrapper}> 
                            <div style={style} className={priceGraphBarStyle.line}></div>
                        </div>)
        }

        if(this.props.leftLineDetails){
            let heightVal = `calc(${this.props.leftLineDetails.prevItemTopPercentage - this.props.topPercentage}% - ${this.props.priceBarHeight}px)`;
            let style = {
                height: heightVal
                //top: this.props.topPercentage? `calc(${this.props.topPercentage}% + ${this.props.priceBarHeight}px`: `${this.props.priceBarHeight}px`,
                //left: '-1px'
            };
            let wrapperStyle = {
                transform: `translate(0, ${this.props.priceBarHeight}px)`
            };
            leftLine = (<div style={wrapperStyle} className={priceGraphBarStyle.lineWrapper}> 
                            <div style={style} className={priceGraphBarStyle.line}></div>
                        </div>)
        }
        let barStyle = {
            height: this.props.priceBarHeight,
            width: widthVal
        };
        let containerTransformVal = this.props.topPercentage? `translate(0, ${this.props.topPercentage}%) translate(0, -${this.props.priceBarHeight}px)`: `translate(0,0)`;
        let containerStyle = {
            transform: containerTransformVal
        };
        let content;
        if(this.state.onEdit){
            content = (
                <div>
                    <input ref="price" defaultValue={this.props.item[2]} />
                        <br/>
                    <input ref="discount" defaultValue={this.props.item[3]} onKeyPress={this.onSave.bind(this)}/>
                </div>
            )
            
        }
        else{
            content = (<div>
                ${this.props.item[2]}
                 <br/>
                {this.props.item[3]}% off
                <i className={priceGraphBarStyle.icon} onClick={this.onEdit.bind(this)} />
            </div>)
        }
        return (
            <div style={containerStyle} className={priceGraphBarStyle.container}>
                <div style={barStyle} className={priceGraphBarStyle.main}>
                    {content}
                </div>
                {leftLine}
                {rightLine}
            </div>
            
        )
    }
}