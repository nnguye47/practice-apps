import React, {useState} from 'react';
import { render } from "react-dom";
import F2 from './F2.jsx'

const F1 = () => {
  const renderF2 = (e) => {
    e.preventDefault();
    render(<F2 />, document.getElementById("root"));
  }

  return (
    <div>
      hello from F1
      <button onClick={renderF2}>Proceed</button>
    </div>
  )
}

export default F1;