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
          <div className="SearchResultsHeading">
            <img src={repo.logoUrl} alt="" className={'SearchResultsLogo'} />
            <p>{repo.name}</p>
            <span>⭐ {repo.stars}</span>
          </div>
          <p>{repo.description}</p>
        </div>
      ))
    }
  </div>;
}
