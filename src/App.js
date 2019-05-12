import React from 'react'
// import OnBeat from 'onbeat'
import OnBeat from './onBeat.ts'
import OnBeat_2 from './onBeat_2.ts'

import logo from './logo.svg';
import './App.css';
import { hello } from './api/mock'

const onBeat = new OnBeat(140, 8, 4, {
  customMarks: {
    snare: [ '2&', '4&', '6&', '8&' ]
  }
})
const onBeat_2 = new OnBeat_2(140, 8, 4, {
  customMarks: {
    snare: [ '2&', '4&', '6&', '8&' ]
  }
})

window['onBeat'] = onBeat
window['ob'] = onBeat_2

class App extends React.Component{
  state = {
    value: "...",
    show: false,
    data: {},
    i: null,
    // timer: Math.round(window.performance.now())/1000,
  }
  componentDidMount(){
    this.getMock()
    // setInterval(() => {
    //   this.setState({ timer: Math.round(window.performance.now())/1000 })
    // }, 500);
  }

  somethingExpensive = () => {
    let now = Date.now()
    let i = 0
    do {
      i++
    } while (Date.now() - now < 5000)
    
    return i
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
      '16th',
      () => this.setState({ value })
    )
  }
  handleClick = () => {
    let i = this.somethingExpensive()
    onBeat.asyncStep(
      3,
      () => {
        this.setState({
          show: !this.state.show,
          i
        })
      }
    )
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          {this.state.show &&
          <img src={logo} className="App-logo" alt="logo" />}
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
