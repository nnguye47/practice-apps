
const AddWord = ({onSubmit, newWord, newDefinition}) => (

  <div>
    <form onSubmit={onSubmit}>
      <input type='text' placeholder='add a word!' onChange={newWord}></input>
      <input type='text' placeholder='add a definition!' onChange={newDefinition}></input>
      <button>Add Word!</button>
    </form>
  </div>
)

export default AddWord;