import React from 'react';
import './App.css';
import { SearchBar } from './SearchBar';
import { SearchResults } from './SearchResults';
import { apiService } from './apiService';
import { UiRepo } from './intrefaces/UiRepo';

function App() {
  const [repos, setRepos] = React.useState<UiRepo[]>([]);
  const [searchInput, setSearchInput] = React.useState('');

  React.useEffect(() => {
    if (!searchInput) {
      return;
    }
    apiService.getRepos(searchInput).then(r => setRepos(r.uiRepos));
  }, [searchInput])

  return (
    <div className="AppWrapper">
      <SearchBar onChange={setSearchInput} value={searchInput}/>
      {
        searchInput && (
          <SearchResults repos={repos}/>
        )
      }
    </div>
  );
}

export default App;
