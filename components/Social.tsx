import Link from 'next/link';
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaXTwitter,
} from 'react-icons/fa6';

import { cn } from '@/lib/utils';

export const socialLinks = [
  {
    href: '',
    icon: (
      <FaFacebookF className="text-xl text-accent group-hover:text-accent" />
    ),
    text: 'Facebook',
    textColor: 'text-accent',
  },
  {
    href: 'https://github.com/taharakazuki',
    icon: <FaGithub className="text-xl text-accent group-hover:text-accent" />,
    text: 'Github',
    textColor: 'text-accent',
  },
  {
    href: '',
    icon: (
      <FaInstagram className="text-xl text-accent group-hover:text-accent" />
    ),
    text: 'Instagram',
    textColor: 'text-accent',
  },
  {
    href: '',
    icon: (
      <FaXTwitter className="text-xl text-accent group-hover:text-accent" />
    ),
    text: 'X(Twitter)',
    textColor: 'text-accent',
  },
];

const Social = () => {
  return (
    <div className="wrapper flex items-center gap-6">
      {socialLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="button group flex items-center"
        >
          <div className="icon flex items-center justify-center">
            {link.icon}
          </div>
          <span
            className={cn(
              `ml-2 hidden group-hover:inline-block ${link.textColor}`
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
