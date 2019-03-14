import React, { Component } from 'react';
import DongfuItem from "../components/dontfuItem";


class dongfuMainModule extends Component {
    render() {
        const items = [
            1,2,3,4,5
        ]

        return (
            <div className="DongfuInfoShow">
                <div style={{textAlign:"center",margin:"10px 2%"}}>
                    当前仆役:10
                    <span style={{float:"right",marginRight:"5%"}}>
                        <button>招募仆役</button>
                    </span>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>资源种类</th>
                            <th>资源信息</th>
                            <th>仆役配置</th>
                            <th></th>
                        </tr>
                    </thead>
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