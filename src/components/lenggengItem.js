import React, { Component } from 'react';

class lenggengItem extends Component {
    render() {
        return (
        <tr>
            <td>{this.props.item.element}</td>
            <td>{this.props.item.level}</td>
            <td>效果+{this.props.item.effect}%</td>
            <td>{this.props.item.exp}</td>
            <td>
                <button>+</button>
            </td>
        </tr>
        );
    }
}

export default lenggengItem;