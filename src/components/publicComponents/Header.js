import React, { Component } from 'react';
import logo from '../../img/logo.png';
import "./Header.css"

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div>
                    <img src={logo} alt="?"/>
                    <div className="info">
                        <div style={{marginTop:"5px"}}>
                            <span>冷遇见</span>
                            <span>魔月宗</span>
                        </div>
                        <div style={{marginTop:"5px"}}>
                            <span>xx星君</span>
                        </div>
                        <div style={{marginTop:"5px"}}>
                            <span>灵石:50000</span>
                            <span>声望:50000</span>
                            <span>修炼:500 年</span>
                        </div>
                    </div>
                    <a href="#22">坊市</a>
                </div>
            </div>
        );
    }
}

export default Header;