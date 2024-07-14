'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
  return (
    <div className="relative size-full">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: 'easeIn' },
        }}
      >
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' },
          }}
          className="size-[298px] mix-blend-lighten xl:size-[498px]"
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt="Frontend Gorilla"
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
