import { UiRepo } from './intrefaces/UiRepo';

export const apiService = {
  getRepos: (repoName: string) => {
    return fetch(`https://api.github.com/search/repositories?q=${repoName}`)
      .then(r => r.json())
      .then(r => {
        const uiRepos: UiRepo[] = r.items.map((repo: any) => ({
          name: repo.full_name,
          description: repo.description,
          logoUrl: '',
          stars: repo.stargazers_count,
        }));
        return { total: r.total_count, uiRepos };
      })
      ;
  },
};