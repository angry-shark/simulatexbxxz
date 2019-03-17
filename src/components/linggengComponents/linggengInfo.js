import React, { Component } from 'react';
import Item from "./lenggengItem";

class linggengInfo extends Component {
    render() {
        const items=[
            {
                element:"金",
                level:"废弃",
                effect:5,
                exp:10
            },
            {
                element:"金",
                level:"废弃",
                effect:5,
                exp:10
            },
            {
                element:"金",
                level:"废弃",
                effect:5,
                exp:10
            },
            {
                element:"金",
                level:"废弃",
                effect:5,
                exp:10
            },
            {
                element:"金",
                level:"废弃",
                effect:5,
                exp:10
            }
        ]

        return (
            <div className="linggengInfo">
            <table>
                <thead>
                    <tr>
                        <td>五行</td>
                        <td>品阶</td>
                        <td>说明</td>
                        <td>升级</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item,i) => {
                        return <Item item={item} key={i}/>
                    })}
                </tbody>
            </table>       
        </div>
        );
    }
}

export default linggengInfo;