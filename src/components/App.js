import React, { Component } from 'react';
import '../App.css';
import Main from './Main';
import User from './User';

class App extends Component {
  
  render() {
    return (
      <div className="container">
       <h1> Get started with React-Redux! 😀</h1> 
       <Main changeUsername={this.changeUsername} />
       <User username="Max" />
       
      </div>
    );
  }
}

export default App;
