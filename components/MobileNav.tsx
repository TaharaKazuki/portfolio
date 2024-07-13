'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiMenuFries } from 'react-icons/ci';

import Logo from './Logo';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { LINKS } from '@/app/_const';
import { cn } from '@/lib/utils';

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

        <nav className="flex flex-col items-center justify-center gap-8">
          {LINKS.map((link, i) => {
            const isActive = link.path === pathname;
            return (
              <Link href={link.path} key={i} className="group relative">
                <span
                  className={cn(
                    'font-medium capitalize transition-all',
                    isActive ? 'text-accent' : 'group-hover:text-accent'
                  )}
                >
                  {link.name}
                </span>
                <span
                  className={cn(
                    'absolute bottom-0 h-[2px] bg-accent transition-all duration-300 neon-accent',
                    isActive
                      ? 'left-0 w-full'
                      : 'left-1/2 w-0 group-hover:left-0 group-hover:w-full group-hover:neon-accent'
                  )}
                  style={{ transformOrigin: 'center' }}
                ></span>
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
