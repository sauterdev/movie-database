import { Movies } from './types';

export const basicFetch = async <returnType>(
  endpoint: string
): Promise<returnType> => {
  //   console.log('endpoint', endpoint);
  const response = await fetch(endpoint);

  if (!response.ok) throw new Error('');

  const data = await response.json();

  console.log(data);

  return data;
};

//fetch functions for react query

export const fetchMovies = async (search = '', page = 1): Promise<Movies> => {
  return await basicFetch<Movies>(`/api/movies?search=${search}&page=${page}`);
};
