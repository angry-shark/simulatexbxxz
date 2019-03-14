import React, { Component } from 'react';
import JulingUrl from "../img/jiuling00.png";
import ProcessInf from "../components/publicComponents/ProcessInf";

class linggengMainModule extends Component {
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
                        <span style={{width:"70%",textAlign:"center"}}>
                        草:500/1000 木:20/500  铁:120/800
                        </span>
                        <span style={{width:"18%"}}>
                            <button>升级</button>
                        </span>
                    </div>
                    <div className="xiulianSystem" style={{height:"30%"}}>
                        <div className="main">
                            <div>
                                <img src={JulingUrl} alt="hero" style={{display:"inline",marginBottom:"5px"}}/>
                                <div className="showProcess">
                                    当前修炼效率:(1~5)/5秒
                                    <br/>
                                    <div className="bar" style={{marginTop:"5px"}}>
                                        <div className="subBar" 
                                        style={this.state.divStyle} 
                                        ref={(node)=>{this.subBar = node}}>
                                        </div>
                                    </div> 
                                    <p className="clockCount" style={{marginTop:"0"}}>00:0{this.state.time}</p>
                                </div>
                            </div>    
                        </div>
                        <ProcessInf height={150}/>
                    </div>
            </div>
        );
    }
}

export default linggengMainModule;