import React, { Component } from 'react';

class gongfaItem extends Component {
    render() {
        const ItemStyle = {
            backgroundColor:"rgb(224, 224, 105)",
            width:"92%",
            padding:"2%",
            margin:"1% 2%",
        }


        return (
            <div className="gangfaItem" style={ItemStyle}>
                <div tyle={{marginTop:"1%"}}>
                    水系 鬼市秘诀终章(1级) 八星
                    <div style={{float:"right",marginTop:"1%",marginRight:"5%"}}>
                        <button>升级</button>
                    </div>
                </div>
                <div style={{marginTop:"2%"}}>
                    修炼效率 * 2
                    <div style={{float:"right",marginRight:"5%"}}>100灵气</div>
                </div>
            </div>
        );
    }
}

export default gongfaItem;