import Word from './Word.jsx';

const WordList = ({words}) => {

  return (
    <div>
      {words.map((word, index) => (
        <Word word={word} key={index}/>
      ))}
    </div>
  )
}

export default WordList;