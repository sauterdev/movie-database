import React from 'react';
import Image from 'next/legacy/image';

type Props = {
  imgUrl: string;
};

const Thumbnail = ({ imgUrl }: Props) => {
  return (
    <Image
      placeholder="blur"
      blurDataURL="/placeholder.jpg"
      className="rounded-lg"
      layout="fill"
      objectFit="cover"
      src={imgUrl}
      alt="thumbnail"
    />
  );
};

export default Thumbnail;
