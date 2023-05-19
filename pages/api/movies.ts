// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//API Urls
import { SEARCH_BASE_URL, POPULAR_BASE_URL } from '@/config';

//Basic fetch function
import { basicFetch } from '@/api/fetchFunctions';

//types
import type { NextApiRequest, NextApiResponse } from 'next';
import type { Movies } from '@/api/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Movies>
) {
  const { page, search } = req.query; //grab search params

  //two endpoints depending if we are looking for a movie, or looking for popular
  const endpoint = search
    ? `${SEARCH_BASE_URL}${search}&page=${page}`
    : `${POPULAR_BASE_URL}&page=${page}`;

  const data = await basicFetch<Movies>(endpoint);

  res.status(200).json(data);
}
