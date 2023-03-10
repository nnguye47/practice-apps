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
    console.log('click');
    axios.post('/getOne', {word: term})
      .then(res => {
        console.log('data from search', res.data);
      })
  }

  const handleChange = (e) => {
    console.log(e.target.value);
    setTerm(e.target.value);
  }

  const addWord = (e) => {
    e.preventDefault();
    console.log(term, def);
    axios.post('/addWord', {word: term, definition: def})
      .then((res) => {
        console.log('res from server');
      })
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
      <WordList />
    </div>
  )
}



render (<App/>, document.getElementById("root"));
