import React from 'react';
import { UiRepo } from './intrefaces/UiRepo';

interface Props {
  repos: UiRepo[]
}

export function SearchResults(props: Props) {
  return <div className={'SearchResultsList'}>
    {
      props.repos.map(repo => (
        <div key={repo.name} className={'SearchResultsItem'}>
          <img src={repo.logoUrl} alt="" />
          <p>{repo.name} ⭐ {repo.stars}</p>
          <p>{repo.description}</p>
        </div>
      ))
    }
  </div>;
}
