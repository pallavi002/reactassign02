import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent'
import Char from './Char/Char'

class App extends Component {
  state = {
    userInput : ""
  }

  inputChangeHandler = (event) => {
    this.setState({userInput: event.target.value});
    var count = event.target.value
    return count;
  }
  deleteHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText})
  }
  render() {
  const charList = this.state.userInput.split('').map((ch, index) => {
    return <Char character={ch} key={index} click={() => this.deleteHandler(index)} />
  })
    return (
      <div className="App">
        <input onChange={this.inputChangeHandler}  type="text" value={this.state.userInput}/>
        <p>{this.state.userInput.length -1}</p>
        <ValidationComponent count={this.state.userInput.length -1}/>
        { charList }
      </div>
    )
  }
}

export default App;
