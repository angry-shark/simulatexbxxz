import React, { Component } from 'react';

class mengpaiModule extends Component {
    render() {
        let _display = this.props.isdisplay;
        let _isdisplay = "block"
        if(_display === 1){
            _isdisplay = "block";
        }else{
            _isdisplay = "none";
        }


        let style = {
            backgroundColor:"red",
            width:"92%",
            margin:"2%",
            padding:"1%",
            display:_isdisplay
        }

        return (
            <div className="mengpai" style={style}>
                <div>
                    紫门谷>> {7}等门派
                    <span style={{float:"right"}}>正派</span>
                </div>
                <div className="menpaiDes">
                    <p style={{width:"98%",wordWrap:"break-word",wordBreak:"break-all",overflow:"hidden"}}>
                        aaaaaaaaaaaaaaaaaaaaaaaasssssssssssssffsaasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    </p>
                </div>
                <div>
                    <button style={{width:"30%"}}>叛教而出</button>
                </div>
            </div>
        );
    }
}

export default mengpaiModule;