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

const RAINBOW_STEP = 7;

const RAINBOW_COLORS = [
  'bg-red-400',
  'bg-orange-400',
  'bg-yellow-400',
  'bg-green-400',
  'bg-blue-400',
  'bg-indigo-400',
  'bg-purple-400',
];

const reverseIndex = (index: number) => {
  const totalStep = RAINBOW_STEP;
  return totalStep - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(RAINBOW_STEP)].map((_, i) => (
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
          className={cn('relative size-full', RAINBOW_COLORS[i])}
        />
      ))}
    </>
  );
};

export default Stairs;
