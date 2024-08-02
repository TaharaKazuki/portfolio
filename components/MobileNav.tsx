'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';

import Logo from './Logo';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { MOBILE_LINKS } from '@/app/_const';
import { cn } from '@/lib/utils';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const closeMobileMenu = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mb-24 mt-16 text-center text-2xl">
          <Logo onClickHandler={closeMobileMenu} />
        </div>

        <nav className="flex flex-col items-stretch justify-center gap-8">
          {MOBILE_LINKS.map((link, i) => {
            const isActive = link.path === pathname;
            return (
              <Link
                href={link.path}
                key={i}
                className="group relative"
                onClick={closeMobileMenu}
              >
                <span
                  className={cn(
                    'font-medium capitalize transition-all',
                    isActive
                      ? 'text-neon-accent'
                      : 'group-active:text-neon-accent'
                  )}
                >
                  {link.name}
                </span>
                <span
                  className={cn(
                    'absolute bottom-0 left-0 h-[2px] bg-accent neon-accent',
                    isActive ? 'w-full' : 'w-0'
                  )}
                  style={{ transformOrigin: 'left center' }}
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
