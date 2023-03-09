const SearchBar = ({onSubmit, onChange}) => (
  <div>
    hello from searchbar
    <form onSubmit={onSubmit}>
      <input type='text' placeholder='search for a word...' onChange={onChange}></input>
      <button>Search!</button>
    </form>
    <br></br>
  </div>
)

export default SearchBar;