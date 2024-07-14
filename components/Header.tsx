import Link from 'next/link';
import React from 'react';

import Logo from './Logo';
import MobileNav from './MobileNav';
import { Button } from './ui/button';
import Nav from './ui/Nav';

const Header = () => {
  return (
    <header className="py-8 text-white xl:py-12">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <div className="hidden max-w-[500px] flex-1 items-center justify-between rounded-full bg-accent/5 p-3 neon-accent xl:flex">
          <Nav />
          <Link href="/contact">
            <Button variant={'outline'}>Hi There</Button>
          </Link>
        </div>
        <div />
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
