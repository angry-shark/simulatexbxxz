import React, { Component } from 'react';
import logo from '../../img/logo.png';
import "./dongfuItem.css"

class dontfuItem extends Component {
    render() {
        return (
            <tr>
                <td>
                    <img src={logo} alt="" style={{width:"45%",marginLeft:"25%"}}/>
                </td>
                <td>
                    <div>
                        <div>灵石:11级</div>
                        <div>储量:500/1000</div>
                        <div>产量:0</div>
                    </div>
                </td>
                <td>
                    <div>
                        <span><button style={{width:"20%"}}>-</button></span>
                        <span>5/10</span>
                        <span><button style={{width:"20%"}}>+</button></span>
                    </div>
                </td>
                <td>
                    <button style={{width:"80%"}}>升级</button>
                </td>
            </tr>
        );
    }
}

export default dontfuItem;