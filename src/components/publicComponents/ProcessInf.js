import React, { Component } from 'react';

class ProcessInf extends Component {
    render() {
        let diyHeight = this.props.height;
        let _display = this.props.isdisplay;
        let _isdisplay = "block"
        if(diyHeight > 0){
            diyHeight *= 1;
        }else{
            diyHeight = 200
        }
        if(_display === 1){
            _isdisplay = "block";
        }else{
            _isdisplay = "none";
        }


        let StyleObj = {
            height: diyHeight + "px",
            backgroundColor: "rgb(219, 197, 179)",
            margin: "0 2%",
            display: _isdisplay
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