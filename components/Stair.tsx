import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

const stairAnimation = {
  initial: {
    top: '0%',
  },
  animate: {
    top: '100%',
  },
  exit: {
    top: ['100%', '0%'],
  },
};

const STEP = 7;

const reverseIndex = (index: number) => {
  const totalStep = STEP;
  return totalStep - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(STEP)].map((_, i) => (
        <motion.div
          key={i}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
            delay: reverseIndex(i) * 0.1,
          }}
          className={cn('relative size-full bg-white')}
        />
      ))}
    </>
  );
};

export default Stairs;
