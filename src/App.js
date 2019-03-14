import React, { Component } from 'react';
import './App.css';
import Header from "./components/publicComponents/Header";
import Footer from "./components/publicComponents/Footer";
import Xiulian from "./pages/xiulian";
import Linggeng from "./pages/linggeng";
import Dongfu from "./pages/dongfu";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Dongfu />
        <Footer />
      </div>
    );
  }
}

export default App;
