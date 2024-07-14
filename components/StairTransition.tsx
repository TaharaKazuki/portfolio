'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

import Stairs from './Stair';

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="pointer-events-none fixed inset-x-0 top-0 z-40 flex h-screen w-screen">
            <Stairs />
          </div>
        </div>
        <motion.div
          className="pointer-events-none fixed top-0 h-screen w-screen bg-primary"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 2, duration: 0.4, ease: 'easeInOut' },
          }}
        />
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
