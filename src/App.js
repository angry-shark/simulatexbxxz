import React, { Component } from 'react';
import './App.css';
import Header from "./components/publicComponents/Header";
import Footer from "./components/publicComponents/Footer";
import Xiulian from "./pages/xiulian";
import Linggeng from "./pages/linggeng";
import Dongfu from "./pages/dongfu";
import Gongfa from "./pages/gongfa";

class App extends Component {

  constructor(){
    super();
    this.pageSet = [<Xiulian/>,<Linggeng/>,<Gongfa/>,<Dongfu/>];
    this.state = {
      CurrentComponent : this.pageSet[0]
    }
    
  }

  handleSwitchPage(currentPageNum){
    console.log(currentPageNum);
    this.setState({
      CurrentComponent:this.pageSet[currentPageNum]
    })
  }

  render() {


    return (
      <div className="App">
        <Header />
        {this.state.CurrentComponent}
        <Footer onSwitch={this.handleSwitchPage.bind(this)}/>
      </div>
    );
  }
}

export default App;
