import React, { Component } from 'react';
import logo from './logo2.svg';
import Button from './components/button'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <pre className="App-intro">
          1.修改了 <code>logo.svg</code>
          2.写了一个涟漪效果的 <code>Button</code> 组件   
        </pre>
        <Button value='涟漪'/>
        <Button value='效果'/>
        <Button value='Button'/>
      </div>
    );
  }
}

export default App;
