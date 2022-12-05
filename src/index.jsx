import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import TypeScriptText from './components/TypeScriptText';
import testMaxPQ from './components/MaxPQ';

const App = () => {

  return (
    <div className="root">
      <button onClick={testMaxPQ}>测试优先级队列</button>
      <TypeScriptText />
    </div>
  )
}

ReactDom.render(
  <App />,
  document.querySelector('#app'),
);
