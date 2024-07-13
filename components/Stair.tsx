import { motion } from 'framer-motion';

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
            className="relative flex size-full flex-row gap-2 p-16"
          >
            <div className="h-full w-2 rounded-full bg-accent neon-accent" />
            <div className="h-full w-2 rounded-full bg-accent neon-accent" />
            <div className="h-full w-2 rounded-full bg-accent neon-accent" />
          </motion.div>
        );
      })}
    </>
  );
};

export default Stairs;
