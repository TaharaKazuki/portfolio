'use client';

import { usePathname } from 'next/navigation';
import { CiMenuFries } from 'react-icons/ci';

import Logo from './Logo';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mb-40 mt-32 text-center text-2xl">
          <Logo />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
