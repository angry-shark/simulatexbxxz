import React, { Component } from 'react';
import logo from '../img/logo.png';

class dontfuItem extends Component {
    render() {
        return (
            <tr>
                <td>
                    <img src={logo} alt="" style={{width:"45%"}}/>
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
                        <span><button>-</button></span>
                        <span>5/10</span>
                        <span><button>+</button></span>
                    </div>
                </td>
                <td>
                    <button>升级</button>
                </td>
            </tr>
        );
    }
}

export default dontfuItem;