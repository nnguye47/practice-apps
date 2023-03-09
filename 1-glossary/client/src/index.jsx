import React from "react";
import { render } from "react-dom";
import WordList from './components/WordList.jsx';
import AddWord from './components/AddWord.jsx';
import SearchBar from './components/SearchBar.jsx';
const axios = require('axios');

render(
  const createWord = (event) => {
    event.preventDefault();
    axios.post('/addWord')
      .then((response) => {
        console.log('post was made');
      })
  }

  <div>
    <h1><p>Glossary App</p></h1>
    <SearchBar />
    <AddWord onClick={createWord}/>
    <WordList />
  </div>,
  document.getElementById("root")
);
