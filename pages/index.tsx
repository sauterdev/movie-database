import React from 'react';
import { NextPage } from 'next';
//fetch hook
import { useFetchMovies } from '@/api/fetchHooks';
//components
import Hero from '@/components/Hero/Hero';
import Grid from '@/components/Grid/Grid';
import Card from '@/components/Card/Card';
import Spinner from '@/components/Spinner/Spinner';

//Components
import Header from '../components/Header/Header';
import { useState } from 'react';

const Home: NextPage = () => {
  const [query, setQuery] = useState('');

  const { data, fetchNextPage, isLoading, isFetching, error } =
    useFetchMovies(query);

  // console.log(query);
  // console.log(data);

  return (
    <main className="relative h-screen overflow-y-scroll">
      <Header setQuery={setQuery} />
      <Hero />
      <Grid />
      <Card />
      <Spinner />
      MDMDB
    </main>
  );
};

export default Home;
