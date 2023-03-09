import React from "react";
import { render } from "react-dom";
import WordList from './components/WordList.jsx';
import AddWord from './components/AddWord.jsx';
import SearchBar from './components/SearchBar.jsx';

render(
  <div>
    <h1><p>Glossary App</p></h1>
    <SearchBar />
    <AddWord />
    <WordList />
  </div>,
  document.getElementById("root")
);
