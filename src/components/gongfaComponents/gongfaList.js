import React, { Component } from 'react';
import GongfaItem from "./gongfaItem";
import GongfaNav from "./gongfaNav";

class gongfaList extends Component {
    render() {
        let height = 0;
        if(this.props.height > 0){
            height = this.props.height;
        }else{
            height = 224;
        }
        
        let ListStyle = {
            margin:"0",
            padding:"0",
            height:height+"px",
            overflow:"auto"
        }

        return (
            <div className="gongfaList">
                    <ul style={ListStyle}>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                        <GongfaItem/>
                    </ul>
                    <GongfaNav isdisplay={this.props.navdisplay}/>
                </div>
        );
    }
}

export default gongfaList;