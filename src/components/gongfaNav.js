import React, { Component } from 'react';
import "./gongfaNav.css";


class gongfaNav extends Component {
    render() {
        let _display = "none";

        if(this.props.isdisplay === 0){
            _display = "none";
        }else{
            _display = "block";
        }

        return (
            <div style={{width:"100%",display:_display}}>
                <table style={{width:"98%"}}>
                    <tbody>
                        <tr style={{width:"100%"}}>
                            <td><button>门派</button></td>
                            <td><button>攻决</button></td>
                            <td><button>心法</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default gongfaNav;