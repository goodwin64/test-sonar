import React from 'react';
import './App.css';
import { SearchBar } from './SearchBar';
import { SearchResults } from './SearchResults';
import { apiService } from './apiService';
import { UiRepo } from './interfaces/UiRepo';
import { UiPagination } from './interfaces/UiPagination';

const defaultPagination: UiPagination = {
  page: 1,
  totalPages: 0,
  noResults: false,
};

function App() {
  const [repos, setRepos] = React.useState<UiRepo[]>([]);
  const [searchInput, setSearchInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [pagination, setPagination] = React.useState<UiPagination>(defaultPagination);

  React.useEffect(() => {
    if (!searchInput) {
      return;
    }
    setIsLoading(true);
    apiService.getRepos(searchInput, pagination.page)
      .then(r => {
        setRepos(r.uiRepos);
        setIsLoading(false);
        setPagination(p => ({
          ...p,
          totalPages: r.totalPages,
          noResults: r.totalPages === 0,
        }));
      })
      .catch(e => {
        console.error(e);
        setIsLoading(false);
      });
  }, [searchInput, pagination.page]);

  React.useEffect(() => {
    if (!searchInput) {
      setPagination(defaultPagination);
    }
  }, [searchInput]);

  return (
    <div className="AppWrapper">
      <SearchBar onChange={setSearchInput} value={searchInput} />
      {
        pagination.noResults ? 'Nothing found' : (
          <SearchResults repos={repos} pagination={pagination} setPagination={setPagination} isLoading={isLoading} />
        )
      }
    </div>
  );
}

export default App;
