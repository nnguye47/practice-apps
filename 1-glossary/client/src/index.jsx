import React from "react";
import { render } from "react-dom";
import WordList from './components/WordList.jsx';
import AddWord from './components/AddWord.jsx';
import SearchBar from './components/SearchBar.jsx';
import axios from 'axios';

const App = () => {
  const [term, setTerm] = React.useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('click');
    axios.post('/getOne', {word: term})
      .then(res => {
        console.log('data from searc', res.data);
      })
  }

  const handleChange = (e) => {
    console.log(e.target.value);
    setTerm(e.target.value);
  }

  return (
    <div>
      <h1><p>Glossary App</p></h1>
      <SearchBar onSubmit={handleSearch} onChange={handleChange}/>
      <AddWord />
      <WordList />
    </div>
  )
}



render (<App/>, document.getElementById("root"));
