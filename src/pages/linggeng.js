import React, { Component } from 'react';
import LinggengInfo from "../components/linggengComponents/linggengInfo";
import LinggengMainModule from "../components/linggengComponents/linggengMainModule";

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