import React, { Component } from 'react';
import GongfaList from "../components/gongfaList";
import ProcessInf from "../components/publicComponents/ProcessInf";

class gongfa extends Component {
    constructor(){
        super();
        this.height = 224;
        this.navdisplay = 0;
    }


    handleSpanList(){
        if(this.height === 224){
            this.height = 580;
            this.navdisplay = 1;
        }else{
            this.height = 0;
            this.navdisplay = 0;
        }
    }


    render() {
        return (
            <div className="gongfa">
                <div style={{textAlign:"center",margin:"10px 2%"}}>
                    技能点: 33/33
                    <span style={{float:"right",marginRight:"5%"}}>
                        <button>功法详细</button>
                    </span>
                </div>
                <GongfaList height={555} navdisplay={this.navdisplay}/>
            </div>
        );
    }
}

export default gongfa;