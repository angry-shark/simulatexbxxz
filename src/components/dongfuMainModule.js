import React, { Component } from 'react';
import grassUrl from "../img/jiuling00.png";
import logo from '../img/logo.png';
import DongfuItem from "../components/dontfuItem";


class dongfuMainModule extends Component {
    render() {
        const items = [
            1,2,3,4,5
        ]

        return (
            <div className="DongfuInfoShow">
                <table>
                    <tbody>
                        {items.map((item,i) => {
                            return  <DongfuItem key={i}/>
                                        
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default dongfuMainModule;