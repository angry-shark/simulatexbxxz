import React, { Component } from 'react';
import hero from "../img/logo00.png";

class xiulianMainModule extends Component {
    constructor(){
        super();
        this.timer = null;
        this.state = {
            totalExp:0,
            time:5,
            divStyle:{animation: "myfirst 5s infinite linear"}
        }
        this.timeFunction = this.timeFunction.bind(this);
    }

    timeFunction(){
            var newDivStyle = {}
            var newTime = this.state.time;
            var plusExp = 0;
            if(this.state.time === 1){
                newTime=5;
                plusExp= parseInt(Math.random() * 5) + 1;
                newDivStyle = {animation: "myfirst 5s infinite linear"}
                this.setState({
                    time:newTime,
                    totalExp:this.state.totalExp + plusExp,
                    divStyle:newDivStyle
                })
            }
            else{
                newTime--;
                plusExp=0;
                this.setState({
                    time:newTime,
                    totalExp:this.state.totalExp + plusExp,
                })
            }
            console.log("plus " + plusExp);
    }

    componentDidMount() {
        const that = this;
        this.timer = setInterval(that.timeFunction,1000);
    }
    
    componentWillUnmount() {
        if(this.timer != null){
            clearInterval(this.timer);
        }
    }


    render() {
        return (
            <div className="other">
                    <div className="xiulianInfo">
                        <span style={{width:"70%",textAlign:"center"}}>飞剑传书</span>
                        <span style={{width:"18%"}}>总修为 : {this.state.totalExp}</span>
                    </div>
                    <div className="xiulianSystem">
                        <div className="main">
                            <div>
                                <img src={hero} alt="hero" style={{display:"inline"}}/>
                                <div className="showProcess">
                                    当前修炼效率:(1~5)/5秒
                                    <br/>
                                    <div className="bar">
                                        <div className="subBar" 
                                        style={this.state.divStyle} 
                                        ref={(node)=>{this.subBar = node}}>
                                        </div>
                                    </div> 
                                    <p className="clockCount">00:0{this.state.time}</p>
                                </div>
                            </div>    
                        </div>
                        <div className="xiulianProcessInf">
                            <ul style={{listStyleType:"none",backgroundColor:"rgba(0,0,0,0)"}}>
                                <li>
                                    得到悬心石
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
        );
    }
}

export default xiulianMainModule;