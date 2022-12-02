import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import TypeScriptText from './components/TypeScriptText';

ReactDom.render(
  <div className="root">css环境配置成功！<TypeScriptText /></div>,
  document.querySelector('#app'),
);
