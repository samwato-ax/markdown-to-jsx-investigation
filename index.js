import React from 'react';
import { render } from 'react-dom';
import Markdown from 'markdown-to-jsx';

// const markdown = `
// 
//   <img alt="xss" src="javascript:alert('xss')" />
// 
//   <script>alert('xss');</script>
// 
//   hello <a name="n" href="javascript:alert('xss')">*you*</a>
// 
//   [some text](javascript:alert('xss'))
// 
//   > hello <a name="n"
//   > href="javascript:alert('xss')">*you*</a>
// `;
// 
// const result = compiler(markdown);
// 
// console.log(JSON.stringify(result.props, null, 2));

function App() {
  return (
    <div>
      <h1>Markdown</h1>
    </div>
  );
}

// Render
const appEl = document.querySelector('#app');
render(<Markdown {...result.props} />, appEl);
