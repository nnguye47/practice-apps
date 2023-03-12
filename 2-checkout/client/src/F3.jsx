import React, {useState} from 'react';
import { render } from "react-dom";
import axios from 'axios';

const F3 = () => {
  const [num, setNum] = useState('');
  const [exp, setExp] = useState('');
  const [cvv, setCVV] = useState('');
  const [zip, setZip] = useState(0);

  const handelClick = () => {
    var data = {cardnum: num, cvv: cvv, expiration: exp, cardZipcode: zip};
    axios.patch('/updateCard', data);
  }

  return (
    <div>
      hello from f3
      <input type='text' value={num}></input>
      <input type='date' value={exp}></input>
      <input type='number' value={cvv}></input>
      <input type='number' value={zip}></input>
      <button onClick={handleClick}>Next</button>
    </div>
  )
}

export default F3;