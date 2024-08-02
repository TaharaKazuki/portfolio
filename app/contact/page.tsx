'use client';

import { motion } from 'framer-motion';

import { Input } from '@/components/ui/input';

const ContactPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 3, duration: 0.4, ease: 'easeIn' },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px] xl:flex-row">
          <div className="order-2 xl:order-none xl:w-[54%]">
            <form className="flex flex-col gap-6 rounded-xl bg-[#27272c] p-10">
              <p className="text-white/60">
                お問い合わせ・ご質問等ございましたら以下Formよりご連絡ください。
              </p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input />
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactPage;
