'use client';

import { motion } from 'framer-motion';

const SERVICES_INFO = [
  {
    num: '01',
    title: 'Frontend Development',
    description:
      'Frontend領域の開発全般が行えます。最近はNext.js+TypeScriptを主に使用しております。',
  },
  {
    num: '02',
    title: 'Mobile Development',
    description:
      'Frontend領域の延長線上として、PWA開発やReact Nativeを使ったMobile向けの開発が行えます。',
  },
  {
    num: '03',
    title: 'Logo Design',
    description: 'Canvaを使いLogo制作を行えます。当サイトLogoも自作しました。',
  },
  {
    num: '04',
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
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
          }}
          className="grid grid-cols-1 gap-[60px] md:grid-cols-2"
        >
          {SERVICES_INFO.map((service, i) => (
            <div
              key={i}
              className="group flex flex-1 flex-col justify-center gap-6"
            >
              <div className="flex w-full items-center justify-between">
                <div className="text-outline group-hover:text-outline-hover text-5xl font-extrabold text-transparent transition-all duration-500">
                  {service.num}
                </div>
              </div>
              {/* title */}
              <h2 className="text-[42px] font-bold leading-none text-white transition-all duration-500 group-hover:text-neon-accent">
                {service.title}
              </h2>
              {/* description */}
              <p className="text-white/60">{service.description}</p>
              {/* border */}
              <div className="w-full border-b border-white/20" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePage;
