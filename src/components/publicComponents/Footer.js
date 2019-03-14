import React, { Component } from 'react';
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <table>
                    <tbody>
                        <tr>
                            <td><a href="#1">修炼</a></td>
                            <td><a href="#2">灵根</a></td>
                            <td><a href="#3">门派</a></td>
                            <td><a href="#4">洞府</a></td>
                            <td><a href="#5">仙缘</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Footer;