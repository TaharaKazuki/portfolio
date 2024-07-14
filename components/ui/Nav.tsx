'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { LINKS } from '@/app/_const';
import { cn } from '@/lib/utils';

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8 pl-3">
      {LINKS.map((link, i) => {
        const isActive = link.path === pathname;
        return (
          <Link href={link.path} key={i} className="group relative">
            <span
              className={cn(
                'font-medium capitalize transition-all',
                isActive ? 'text-neon-accent' : 'group-hover:text-neon-accent'
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
  );
};

export default Nav;
