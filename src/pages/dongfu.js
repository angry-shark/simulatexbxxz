import React, { Component } from 'react';
import DongfuMainModule from "../components/dongfuMainModule"
import ProcessInf from "../components/publicComponents/ProcessInf";
class dongfu extends Component {
    render() {
        return (
            <div className="dongfu">
                <DongfuMainModule />
                <ProcessInf height={200}/>
            </div>
        );
    }
}

export default dongfu;