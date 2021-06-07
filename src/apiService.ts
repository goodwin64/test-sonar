import { UiRepo } from './interfaces/UiRepo';

export const apiService = {
  getRepos: (repoName: string, page: number) => {
    const perPage = 5;
    return fetch(`https://api.github.com/search/repositories?q=${repoName}&per_page=${perPage}&page=${page}`)
      .then(r => r.json())
      .then(r => {
        const uiRepos: UiRepo[] = r.items.map((repo: any) => ({
          name: repo.full_name,
          description: repo.description,
          logoUrl: repo.owner.avatar_url,
          stars: repo.stargazers_count,
        }));
        return {
          totalPages: Math.ceil(r.total_count / perPage),
          uiRepos, page,
        };
      })
      ;
  },
};