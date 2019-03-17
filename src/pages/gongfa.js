import React, { Component } from 'react';
import GongfaList from "../components/gongfaComponents/gongfaList";
import ProcessInf from "../components/publicComponents/ProcessInf";
import MengPai from "../components/gongfaComponents/mengpaiModule";

class gongfa extends Component {
    constructor(){
        super();
        this.state = {
            height : 224,
            navdisplay : 0,
            Infhidden:1
        }
    }


    handleSpanList(){
        if(this.state.navdisplay === 0){
            this.setState({
                height: 550,
                navdisplay :1,
                Infhidden: 0
            })
        }else{
            this.setState({
                height: 0,
                navdisplay :0,
                Infhidden:1
            })
        }
    }


    render() {
        return (
            <div className="gongfa">
                <div style={{textAlign:"center",margin:"10px 2%"}}>
                    技能点: 33/33
                    <span style={{float:"right",marginRight:"5%"}}>
                        <button onClick={this.handleSpanList.bind(this)}>功法详细</button>
                    </span>
                </div>
                <GongfaList height={this.state.height} navdisplay={this.state.navdisplay}/>
                <MengPai isdisplay={this.state.Infhidden}/>
                <ProcessInf isdisplay={this.state.Infhidden}/>
            </div>
        );
    }
}

export default gongfa;