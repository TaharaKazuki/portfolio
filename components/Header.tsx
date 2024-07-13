import Link from 'next/link';
import React from 'react';

import { Button } from './ui/button';
import Nav from './ui/Nav';

const Header = () => {
  return (
    <header className="py-8 text-white xl:py-12">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            DK
            <span className="ml-2 inline-block size-2 rounded-full bg-accent neon-accent" />
          </h1>
        </Link>

        <div className="hidden items-center gap-8 xl:flex">
          <Nav />
          <Link href="/contact">
            <Button>Hi Contact with Me</Button>
          </Link>
        </div>

        <div className="xl:hidden">mobile nav</div>
      </div>
    </header>
  );
};

export default Header;
