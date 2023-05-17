import { NextPage } from 'next';

//Components
import Header from '../components/Header/Header';

const Home: NextPage = () => {
  return (
    <main className="relative h-screen overflow-y-scroll">
      <Header />
      MDMDB
    </main>
  );
};

export default Home;
