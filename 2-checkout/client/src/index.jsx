import React, {useState} from "react";
import { render } from "react-dom";
import F1 from './F1.jsx';

const App = () => {

  const renderF1 = (e) => {
    e.preventDefault();
    render(<F1 cookie={JSON.stringify(document.cookie, undefined, "\t")}/>, document.getElementById("root"));
  };

  return (
    <div>
      <p>Hello, World!</p>
      <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
      <p>
        <button onClick={renderF1}>Create Account</button>
      </p>

    </div>
  )
}

render(<App />, document.getElementById("root"));
