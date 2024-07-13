'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

const LINKS = [
  { path: '/', name: 'home' },
  { path: '/services', name: 'services' },
  { path: '/resume', name: 'resume' },
  { path: '/work', name: 'work' },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
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
                'absolute bottom-0 h-[2px] bg-accent transition-all duration-300',
                isActive
                  ? 'left-0 w-full'
                  : 'left-1/2 w-0 group-hover:left-0 group-hover:w-full'
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