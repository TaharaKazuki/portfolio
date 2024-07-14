import Link from 'next/link';
import { FaFacebookF, FaGithub } from 'react-icons/fa6';
import { SiZenn } from 'react-icons/si';

import { cn } from '@/lib/utils';

export const socialLinks = [
  {
    href: 'https://www.facebook.com/profile.php?id=100007453638639',
    icon: (
      <FaFacebookF className="size-5 text-accent group-hover:text-accent" />
    ),
    text: 'Facebook',
    textColor: 'text-accent',
  },
  {
    href: 'https://github.com/taharakazuki',
    icon: <FaGithub className="size-6 text-accent group-hover:text-accent" />,
    text: 'Github',
    textColor: 'text-accent',
  },
  {
    href: 'https://zenn.dev/dk_',
    icon: (
      <SiZenn className="size-4 text-xl text-accent group-hover:text-accent" />
    ),
    text: 'Zenn',
    textColor: 'text-accent',
  },
];

const Social = () => {
  return (
    <div className="wrapper flex items-center gap-4">
      {socialLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="button group flex items-center text-center"
        >
          <div className="icon flex w-16 items-center justify-center group-hover:pl-px">
            {link.icon}
          </div>
          <span
            className={cn(
              `w-full hidden pr-5 xl:group-hover:inline-block xl:group-hover:text-neon-accent ${link.textColor}`
            )}
          >
            {link.text}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Social;
