import { motion } from 'framer-motion';

const stairAnimation = {
  initial: {
    right: '0%',
  },
  animate: {
    right: '100%',
  },
  exit: {
    left: ['100%', '0%'],
  },
};

const STEP = 6;

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
              duration: 0.4,
              ease: 'easeIn',
              delay: index * 0.1,
            }}
            className="relative flex size-full flex-col items-center justify-center xl:p-8"
          >
            <div className="h-2 w-10 rounded-full bg-accent neon-accent xl:h-2 xl:w-20" />
          </motion.div>
        );
      })}
    </>
  );
};

export default Stairs;
