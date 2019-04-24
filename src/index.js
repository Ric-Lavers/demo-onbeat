import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { bpm } from './onbeat';
import { rAFLoop } from './onbeat/loops'
import { setBeatMark, bpmToMs } from './onbeat/methods'


rAFLoop(
  t => {
    setBeatMark(bpmToMs(15), 8)(t);
    document.getElementById('beatmark').innerText = window['beatMark']
  },
  { repeat: true }
)



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
