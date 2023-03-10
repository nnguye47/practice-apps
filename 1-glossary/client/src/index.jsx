import React from "react";
import { render } from "react-dom";
import WordList from './components/WordList.jsx';
import AddWord from './components/AddWord.jsx';
import SearchBar from './components/SearchBar.jsx';
import axios from 'axios';

const App = () => {
  const [term, setTerm] = React.useState('');
  const [list, setList] = React.useState([]);
  const [renderList, setRenderList] = React.useState([]);
  const [def, setDef] = React.useState('');

  React.useEffect(() => {
    axios.get('/getAll')
      .then((res) => {
        setRenderList(res.data);
        setList(res.data);
      });
  }, [])

  const handleSearch = (e) => {
    e.preventDefault();
    var copy = Array.from(list);
    var storage = [];

    copy.forEach(word => {
      if (term === word.word) {
        storage.push(word);
      }
    })

    if (storage.length === 0) {
      setRenderList([{word: `Sorry, that word can't be found`, definition: 'Try again!'}])
      return;
    }

    setRenderList(storage);
    setTerm('');
    e.target.reset();
  }

  const handleChange = (e) => {
    e.preventDefault();
    setTerm(e.target.value);
  }

  const addWord = (e) => {
    e.preventDefault();
    axios.post('/addWord', {word: term, definition: def})
      .then(() => {
        return axios.get('/getAll');
      })
      .then((res) => {
        setRenderList(res.data)
      })
      .then()
  }

  const handleDef = (e) => {
    e.preventDefault();
    setDef(e.target.value);
  }

  return (
    <div>
      <h1><p>Glossary App</p></h1>
      <SearchBar onSubmit={handleSearch} onChange={handleChange}/>
      <AddWord onSubmit={addWord} newWord={handleChange} newDefinition={handleDef}/>
      <WordList words={renderList}/>
    </div>
  )
}



render (<App/>, document.getElementById("root"));
