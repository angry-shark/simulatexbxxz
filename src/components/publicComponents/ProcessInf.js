import React, { Component } from 'react';

class ProcessInf extends Component {
    render() {
        let diyHeight = this.props.height;
        if(diyHeight > 0){
            diyHeight *= 1;
        }else{
            diyHeight = 200
        }


        const StyleObj = {
            height: diyHeight + "px",
            backgroundColor: "rgb(219, 197, 179)",
            margin: "0 2%"
        }
        return (
            <div className="xiulianProcessInf" style={StyleObj}>
                <ul style={{listStyleType:"none",backgroundColor:"rgba(0,0,0,0)"}}>
                    <li>
                        得到悬心石
                    </li>
                </ul>
            </div>
            );
    }
}

export default ProcessInf;