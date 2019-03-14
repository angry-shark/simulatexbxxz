import React, { Component } from 'react';
import "./Footer.css";

class Footer extends Component {
    handleSwichPageRequestToApp(index){
        console.log(index);
        this.props.onSwitch(index);
    }

    render() {
        return (
            <div className="Footer">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <a href="#1" 
                                onClick={this.handleSwichPageRequestToApp.bind(this,0)}>
                                    修炼
                                </a>
                            </td>
                            <td>
                                <a href="#2" 
                                onClick={this.handleSwichPageRequestToApp.bind(this,1)}>
                                    灵根
                                </a>
                            </td>
                            <td>
                                <a href="#3">
                                    门派
                                </a>
                            </td>
                            <td>
                                <a href="#4"
                                onClick={this.handleSwichPageRequestToApp.bind(this,2)}>
                                    洞府
                                </a>
                            </td>
                            <td>
                                <a href="#5">
                                    仙缘
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Footer;