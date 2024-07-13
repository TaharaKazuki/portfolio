import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <>
      <Link href="/">
        <h1 className="text-4xl font-semibold">
          DK
          <span className="ml-2 inline-block size-2 rounded-full bg-accent neon-accent" />
        </h1>
      </Link>
    </>
  );
};

export default Logo;
