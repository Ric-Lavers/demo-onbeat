import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { hello } from './api/mock'

// import { asyncStep, promiseStep } from './onbeat/methods'
import Onbeat from './onbeat/methods'
const onBeat = new Onbeat(140, 8, 4, {
  customMarks: {
    snare: [ '2&', '4&', '6&', '8&' ]
  }
})

// const step = new Step()

class App extends React.Component{
  state = {
    value: "...",
    show: false,
    data: {},
    // timer: Math.round(window.performance.now())/1000,
  }
  componentDidMount(){
    this.getMock()
    // setInterval(() => {
    //   this.setState({ timer: Math.round(window.performance.now())/1000 })
    // }, 500);
  }
  getMock = async () => {
    this.setState({ data: {} })
    let data = await hello()
    onBeat.asyncStep(
      '3&',
      () => this.setState({ data }),
    )
  }
  handleChange = value => {
    onBeat.asyncStep(
      '2e',
      () => this.setState({ value })
    )
  }
  handleClick = () => {
    onBeat.asyncStep(
      1,
      () => this.setState({show: !this.state.show})
    )
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.show &&
          <img src={logo} className="App-logo" alt="logo" />}
          {/* <p>{this.state.timer}</p> */}
          <h1 id="beatmark" >not defined</h1>
          {JSON.stringify(this.state)}
          <input
            onChange={({target: {value}}) => this.handleChange(value)}
            type="text"
            value={this.state.value}
          />
          <input onClick={this.handleClick} type="button" value="click"/>
          <input onClick={this.getMock} type="button" value="fetch"/>
        </header>
      </div>
    );
  }
}
/* 
function App() {
  const [input, setInput] = useState('')
  const [show, setShow] = useState(false)

  const handleChange = value => {
    step.promiseStep(
      '2e',
      () => setInput(value)
    )
    
  }
  const handleClick = () => {
    asyncStep(
      '3a',
      () => setShow( !show )
    )
  }

  return (
    <div className="App">
      <header className="App-header">
{show &&
        <img src={logo} className="App-logo" alt="logo" />}
        <h1 id="beatmark" >not defined</h1>
        <input
          onChange={({target: {value}}) => handleChange(value)}
          value={input}
        />
        <input onClick={handleClick} type="button" value="click"/>
}
      </header>
    </div>
  );
}
 */
export default App;
