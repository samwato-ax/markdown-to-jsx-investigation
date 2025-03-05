import * as React from 'react';
import { createRoot } from 'react-dom/client';

import Markdown from 'markdown-to-jsx';

// Testing Markdown's XSS Vulnerability from
// https://github.com/showdownjs/showdown/wiki/Markdown's-XSS-Vulnerability-(and-how-to-mitigate-it)

const harmlessMarkdown = [
  `### Hello World`,
  `**Hello World**`,
]

const suspiciousMarkdown = [
`<img alt="xss" src="javascript:alert('xss')" />`,
`hello <a name="n" href="javascript:alert('xss')">*you*</a>`,
`[some text](javascript:alert('xss'))`,
`
  > hello <a name="n"
  > href="javascript:alert('xss')">*you*</a>
`,
]

function App() {
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <h1>Harmless Markdown</h1>
      {harmlessMarkdown.map((md, i) => <Markdown key={i}>{md}</Markdown>)}

      <h1>Markdown XSS Vulnerability</h1>
      <button onClick={() => setShow(!show)}>Toggle XSS Markdown</button>

      {show && (
        <div>
          {suspiciousMarkdown.map((md) => <Markdown key={window.crypto.randomUUID()}>{md}</Markdown>)}
        </div>
      )}
    </div>
  );
}

// Render
const appEl = document.querySelector('#app');
const root = createRoot(appEl);
root.render(<App />);
