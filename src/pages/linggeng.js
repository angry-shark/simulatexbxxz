import React, { Component } from 'react';
import LinggengInfo from "../components/linggengInfo";
import LinggengMainModule from "../components/linggengMainModule";

class linggeng extends Component {
    render() {
        return (
            <div className="linggeng">
                <LinggengInfo/>
                <LinggengMainModule />
            </div>
        );
    }
}

export default linggeng;