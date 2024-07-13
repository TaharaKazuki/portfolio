import Link from 'next/link';
import React from 'react';

type LogoProps = {
  onClickHandler?: () => void;
};

const Logo = ({ onClickHandler }: LogoProps) => {
  return (
    <>
      <Link href="/" onClick={onClickHandler}>
        <h1 className="text-4xl font-semibold">
          DK
          <span className="ml-2 inline-block size-2 rounded-full bg-accent neon-accent" />
        </h1>
      </Link>
    </>
  );
};

export default Logo;
