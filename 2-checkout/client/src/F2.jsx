import React, {useState} from 'react';
import { render } from "react-dom";
import F3 from './F3.jsx';
import axios from 'axios';

const F2 = () => {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState(0);

  const handleLine1 = (e) => {
    setLine1(e.target.value);
  };

  const handleLine2 = (e) => {
    setLine2(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleZip = (e) => {
    setZip(e.target.value);
  };

  const handleState = (e) => {
    setState(e.target.value);
  };



  const renderF2 = (e) => {
    e.preventDefault();
    var data = {line1: line1, line2: line2, city: city, currentState: state, zipcode: zip};
    axios.patch('/updateLocation', data);
    // render(<F3 />, document.getElementById("root"));
  }

  return (
    <div>
      <h1>hello from renderF2</h1>
      line 1: <input onChange={handleLine1} type='text' value={line1}></input><br></br>
      line 2: <input onChange={handleLine2} type='text' value={line2}></input><br></br>
      city: <input onChange={handleCity} type='text' value={city}></input><br></br>
      state: <input onChange={handleState} type='text' value={state}></input><br></br>
      zip: <input onChange={handleZip} type='text' value={zip}></input><br></br>
      <button onClick={renderF2}>Next</button>
    </div>
  )
}

export default F2;