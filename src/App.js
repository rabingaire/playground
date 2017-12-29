import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header';
import Editor from './Components/Editor';
import Preview from './Components/Preview';

class App extends Component {
  constructor() {
    super();
    this.state = {
        code: '// Code Here'
    };
    this.updateCode = this.updateCode.bind(this);
  }

  updateCode(newCode) {
    try {
      this.setState({ code: newCode});
    } 
    catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="Body">
          <Editor 
            updateCode={this.updateCode}
            code={this.state.code} />
          <Preview>{this.state.code}</Preview>
        </div>
      </div>
    );
  }
}

export default App;
