'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { type ReactNode } from 'react';

type PageTransitionProps = {
  children: ReactNode;
};
const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 2, duration: 0.4, ease: 'easeInOut' },
          }}
          className="pointer-events-none fixed top-0 h-screen w-screen bg-primary"
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
