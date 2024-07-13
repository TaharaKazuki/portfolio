import { motion } from 'framer-motion';

const splitAnimationLeft = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-100%',
    transition: {
      duration: 1,
      ease: 'easeInOut',
      delay: 0.5,
    },
  },
};

const splitAnimationRight = {
  initial: {
    x: 0,
  },
  animate: {
    x: '100%',
    transition: {
      duration: 1,
      ease: 'easeInOut',
      delay: 0.5,
    },
  },
};

const generateRandomSize = () => {
  const sizes = ['h-16', 'h-32', 'h-48'];
  const cols = ['col-span-1', 'col-span-2'];
  return `${sizes[Math.floor(Math.random() * sizes.length)]} ${
    cols[Math.floor(Math.random() * cols.length)]
  }`;
};

const generateGridItems = (count: number) => {
  return [...Array(count)].map((_, i) => (
    <div
      key={i}
      className={`flex items-center justify-center whitespace-pre-wrap border border-accent bg-primary text-accent ${generateRandomSize()}`}
    >
      hoanbaouganobagajlgahblnalgaguoaba
    </div>
  ));
};

const Stairs = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <motion.div
        className="absolute left-0 top-0 h-full w-1/2 bg-primary"
        variants={splitAnimationLeft}
        initial="initial"
        animate="animate"
      >
        <div className="grid grid-cols-3 gap-4 p-4">
          {generateGridItems(20)}
        </div>
      </motion.div>
      <motion.div
        className="absolute right-0 top-0 h-full w-1/2 bg-primary"
        variants={splitAnimationRight}
        initial="initial"
        animate="animate"
      >
        <div className="grid grid-cols-4 gap-4 p-4">
          {generateGridItems(30)}
        </div>
      </motion.div>
    </div>
  );
};

export default Stairs;
