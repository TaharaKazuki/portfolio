'use client';

import { motion } from 'framer-motion';
import { FaMobileAlt, FaPalette, FaHandHoldingHeart } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

const SERVICES_INFO = [
  {
    icon: (
      <SiTypescript className="text-white duration-500 group-hover:text-accent" />
    ),
    title: 'Frontend Development',
    description:
      'Frontend領域の開発全般が行えます。最近はNext.js+TypeScriptを主に使用しております。',
  },
  {
    icon: (
      <FaMobileAlt className="text-white duration-500 group-hover:text-accent" />
    ),
    title: 'Mobile Development',
    description:
      'Frontend領域の延長線上として、PWA開発やReact Nativeを使ったMobile向けの開発が行えます。',
  },
  {
    icon: (
      <FaPalette className="text-white duration-500 group-hover:text-accent" />
    ),
    title: 'Logo Design',
    description: 'Canvaを使いLogo制作を行えます。当サイトLogoも自作しました。',
  },
  {
    icon: (
      <FaHandHoldingHeart className="text-white duration-500 group-hover:text-accent" />
    ),
    title: 'Technical Contribution',
    description:
      'はじめて間もないですがZennを通じて技術知見の共有をおこなっております。',
  },
];

const ServicePage = () => {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'linear' },
          }}
          className="grid grid-cols-1 gap-[40px] md:grid-cols-2"
        >
          {SERVICES_INFO.map((service, i) => (
            <motion.div
              key={i}
              initial={{ y: 100, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 2.4 * i + 1,
                  duration: 0.4,
                  ease: 'linear',
                },
              }}
            >
              <div
                key={i}
                className="group flex h-full flex-1 flex-col justify-center gap-6 rounded-lg border-2 border-white/80 p-5 transition-all duration-500 hover:neon-accent"
              >
                <div className="flex w-full items-center justify-between">
                  <div className="text-outline group-hover:text-outline-hover text-5xl font-extrabold text-transparent transition-all duration-500">
                    {service.icon}
                  </div>
                </div>

                <h2 className="text-[42px] font-bold leading-none text-white transition-all duration-500 group-hover:text-neon-accent">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePage;
