import Link from 'next/link';
import React from 'react';

import { cn } from '@/lib/utils';

type LogoProps = {
  onClickHandler?: () => void;
};

const Logo = ({ onClickHandler }: LogoProps) => {
  return (
    <>
      <Link href="/" className="group relative" onClick={onClickHandler}>
        <h1
          className={cn(
            'capitalize transition-all group-hover:xl:text-neon-accent text-4xl xl:text-5xl font-semibold duration-300 xl:hover:text-neon-accent'
          )}
        >
          DK
          <span className="ml-2 inline-block size-2 rounded-full bg-accent neon-accent" />
        </h1>
        <span
          className={cn(
            'absolute bottom-0 left-1/2 h-1 w-0 bg-accent transition-all duration-300 neon-accent transform-origin-center group-hover:xl:left-0 group-hover:xl:w-full'
          )}
        />
      </Link>
    </>
  );
};

export default Logo;
