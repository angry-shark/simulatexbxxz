import React, { Component } from 'react';
import './App.css';
import Header from "./components/publicComponents/Header";
import Footer from "./components/publicComponents/Footer";
import Xiulian from "./pages/xiulian";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Xiulian />
        <Footer />
      </div>
    );
  }
}

export default App;
