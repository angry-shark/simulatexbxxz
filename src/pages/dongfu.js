import React, { Component } from 'react';
import "./dongfu.css"
import DongfuMainModule from "../components/dongfuComponents/dongfuMainModule"
import ProcessInf from "../components/publicComponents/ProcessInf";
class dongfu extends Component {
    render() {
        return (
            <div className="dongfu">
                <DongfuMainModule />
                <ProcessInf height={200} isdisplay={1}/>
            </div>
        );
    }
}

export default dongfu;