import React from 'react';
import { UiRepo } from './interfaces/UiRepo';
import { UiPagination } from './interfaces/UiPagination';

interface Props {
  repos: UiRepo[];
  pagination: UiPagination;
  setPagination: (pagination: UiPagination) => void;
}

export function SearchResults(props: Props) {
  const navigateForwardDisabled = React.useMemo(() => {
    return props.pagination.page >= props.pagination.totalPages;
  }, [props.pagination])
  const loadMore = React.useCallback(() => {
    if (navigateForwardDisabled) {
      return;
    }
    props.setPagination({
      ...props.pagination,
      page: props.pagination.page + 1,
    })
  }, [props.setPagination, props.pagination]);

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
    {
      props.repos.length > 0 && (
        <div className={'SearchPagination'}>
          <div className={'SearchPaginationInfo'}>
            Page {props.pagination.page} of {props.pagination.totalPages}
          </div>
          <button
            onClick={loadMore}
            disabled={navigateForwardDisabled}
            className={'SearchPaginationNextPage'}
          >
            Load more
          </button>
        </div>
      )
    }
  </div>;
}
