import React, { useState } from 'react';
import Image from 'next/image';

type Props = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SearchInput = ({ setQuery }: Props) => {
  const [text, setText] = useState('');
  const timer = React.useRef<NodeJS.Timeout>();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    clearTimeout(timer.current);

    //controlled input updates on keystrokes
    setText(value);

    //query is delayed 3ms to give user time to type before hitting the API
    timer.current = setTimeout(() => {
      setQuery(value);
    }, 300);
  };

  return (
    <>
      <input
        className="h-10 pr-14 md:w-96 rounded-full p-4 text-md bg-zinc-700 text-white focus:outline-none focus:border focus:border-solid focus:border-l-cyan-200"
        type="text"
        placeholder="Search Movie"
        value={text}
        onChange={handleInput}
      />
      <div className="absolute right-5 top-2">
        <Image width="30" height="32" src="/tmdb-logo.svg" alt="tmdb logo" />
      </div>
    </>
  );
};

export default SearchInput;
