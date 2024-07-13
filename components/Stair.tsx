import { motion } from 'framer-motion';

const diagonalLineAnimation = {
  initial: {
    scaleX: 0,
    rotate: 45,
    x: '-50%',
  },
  animate: {
    scaleX: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const splitAnimationLeft = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-100%',
    transition: {
      duration: 1,
      ease: 'easeInOut',
      delay: 1,
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
      delay: 1,
    },
  },
};

const Stairs = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <motion.div
        className="absolute left-1/2 top-1/2 h-[2px] origin-center bg-accent"
        variants={diagonalLineAnimation}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute left-0 top-0 h-full w-1/2 bg-white"
        variants={splitAnimationLeft}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute right-0 top-0 h-full w-1/2 bg-white"
        variants={splitAnimationRight}
        initial="initial"
        animate="animate"
      />
    </div>
  );
};

export default Stairs;
