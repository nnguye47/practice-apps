import React, {useState} from 'react';
import { render } from "react-dom";
import F3 from './F3.jsx'

const F2 = () => {
  const renderF2 = (e) => {
    e.preventDefault();
    // render(<F3 />, document.getElementById("root"));
  }

  return (
    <div>
      hello from renderF2
      <button onClick={renderF2}>Proceed</button>
    </div>
  )
}

export default F2;