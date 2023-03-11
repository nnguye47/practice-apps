import React, {useState} from "react";
import { render } from "react-dom";
import F1 from './F1.jsx';

const App = () => {

  const renderF1 = (e) => {
    e.preventDefault();
    render(<F1 />, document.getElementById("root"));
  };

  return (
    <div>
      <p>Hello, World!</p>
      <p>
        <button onClick={renderF1}>Create Account</button>
      </p>
      <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
    </div>
  )
}

render(<App/>, document.getElementById("root"));
