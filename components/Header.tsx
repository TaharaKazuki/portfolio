import Link from 'next/link';
import React from 'react';

import { Button } from './ui/button';
import Nav from './ui/Nav';

const Header = () => {
  return (
    <header className="py-8 text-white xl:py-12">
      <div className="container mx-auto">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            DK<span className="text-accent">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex">
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
