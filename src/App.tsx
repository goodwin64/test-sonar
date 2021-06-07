import React from 'react';
import './App.css';
import { SearchBar } from './SearchBar';
import { SearchResults } from './SearchResults';

function App() {
  const [searchInput, setSearchInput] = React.useState('');

  return (
    <div className="App">
      <SearchBar onChange={setSearchInput} value={searchInput}/>
      <SearchResults/>
    </div>
  );
}

export default App;
