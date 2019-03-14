import React, { Component } from 'react';

class levelCompoent extends Component {
    render() {
        const btnStyle = {
            width:"75%",
            backgroundColor:"rgba(230, 186, 104, 0.692)",
            textAlign:"center"
        }

        return (
            <div className="levelUp" style={{marginTop:"5%"}}>
                    <table>
                        <thead>
                            <tr>
                                <td>修炼</td>
                                <td>品阶</td>
                                <td>升级需求</td>
                                <td>       </td>                               
                            </tr>
              
                        </thead>
                        <tbody>
                            <tr>
                                <td>境界</td>
                                <td>凡人</td>
                                <td>100修为</td>
                                <td><button style={btnStyle}>渡劫</button></td>
                            </tr>
                            <tr>
                                <td>肉身</td>
                                <td>凡人之躯</td>
                                <td>50修为</td>
                                <td><button style={btnStyle}>升级</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        );
    }
}

export default levelCompoent;