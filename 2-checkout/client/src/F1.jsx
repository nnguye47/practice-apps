import React, {useState} from 'react';
import { render } from "react-dom";
import F2 from './F2.jsx';
import axios from 'axios';

const F1 = ({cookie}) => {
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };



  const renderF2 = (e) => {
    e.preventDefault();
    var account = {username: userName, email: email, password: password};
    console.log(account);
    axios.post('/account', account);
    render(<F2 />, document.getElementById("root"));
  };

  return (
    <div>
        <h1>hello from F1</h1>
      <input type='text' onChange={handleUsername} value={userName} placeholder='username...'></input><br></br>
      <input type='email' onChange={handleEmail} value={email} placeholder='email...'></input><br></br>
      <input type='password' onChange={handlePassword} value={password} placeholder='password...'></input><br></br>
      <button onClick={renderF2}>Proceed</button>
    </div>
  )
}

export default F1;