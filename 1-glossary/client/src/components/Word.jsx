const Word = ({word}) => {

  return (
    <div>
      <h3>{word.word}:</h3>
      <p>{word.definition}</p>
    </div>
  )
}

export default Word;