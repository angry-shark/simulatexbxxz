import React, { Component } from 'react';
import "./xiulian.css";
import LevelUp from "../components/xiulianComponents/levelCompoent";
import MainModule from "../components/xiulianComponents/xiulianMainModule";


class xiulian extends Component {
    render() {
        return (
            <div className="xiulian">
                <LevelUp />
                <MainModule />
            </div>
        );
    }
}

export default xiulian;