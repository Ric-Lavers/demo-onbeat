import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
/* 
import onBeat from './onbeat/methods'


const on = Symbol('on')
window['on'] =  on

window['onBeat'] = onBeat
const houseBeat = new onBeat(126, 16, 4)
const stepBeat = new onBeat(140, 16, 4)
const dubBeat = new onBeat(70, 16, 2)

window[on] =  {
  houseBeat,
  stepBeat,
  dubBeat,
}

stepBeat.asyncStep(6, console.log)
stepBeat.asyncStep(12, console.log)
 */
/* 

 window['dubBeat'] = dubBeat
  window.requestAnimationFrame(ts => dubBeat.wRAF_LOOP(ts, dubBeat.getBeatMark) )
 */

/* 
rAFLoop(
  t => {
    // setBeatMark(bpmToMs(120), 4)(t);
    window['beatMark'] = houseBeat.getBeatMark()
    document.getElementById('beatmark').innerText = window['beatMark']
  },
  { repeat: true }
) */




ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
