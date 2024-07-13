import { motion } from 'framer-motion';

// variants
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

const STEP = 10;
const reverseIndex = (index: number) => {
  const totalSteps = STEP;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(STEP)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
              delay: reverseIndex(index) * 0.1,
            }}
            className="relative size-full bg-accent"
          />
        );
      })}
    </>
  );
};

export default Stairs;
