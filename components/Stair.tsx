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

const STEP = 7;

const calculateHeight = (index: number) => {
  const middleIndex = Math.floor(STEP / 2);
  return `${20 + Math.abs(index - middleIndex) * 2}rem`;
};

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
            className="relative flex size-full flex-col items-center justify-center xl:p-8"
          >
            <div
              className="w-2 rounded-full bg-accent neon-accent xl:w-6"
              style={{ height: calculateHeight(index) }}
            />
          </motion.div>
        );
      })}
    </>
  );
};

export default Stairs;
