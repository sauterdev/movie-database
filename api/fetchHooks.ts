import { useInfiniteQuery } from '@tanstack/react-query';
//fetch function
import { fetchMovies } from './fetchFunctions';
//types
import { Movies } from './types';

//create hook using infinite query
export const useFetchMovies = (search: string) => {
  return useInfiniteQuery(
    ['movies', search],
    ({ pageParam = 1 }) => fetchMovies(search, pageParam),
    {
      getNextPageParam: (lastPage: Movies) => {
        if (lastPage.page < lastPage.total_pages) {
          return lastPage.page + 1;
        }
        return undefined;
      },
      //dont want to refetch data when window focus is lost
      refetchOnWindowFocus: false
    }
  );
};
