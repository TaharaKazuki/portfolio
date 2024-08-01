'use client';

import { motion } from 'framer-motion';
import { Fragment } from 'react';
import {
  FaHtml5,
  FaCss3,
  FaSass,
  FaJs,
  FaReact,
  FaNodeJs,
  FaVuejs,
  FaYarn,
  FaNpm,
  FaGithub,
  FaGitlab,
  FaAws,
  FaDocker,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiNuxtdotjs,
  SiTypescript,
  SiExpress,
  SiCssmodules,
  SiChakraui,
  SiPwa,
  SiJest,
  SiPlaywright,
  SiGithubactions,
  SiServerless,
  SiVercel,
  SiFirebase,
  SiFramer,
  SiVite,
  SiVitest,
  SiStorybook,
} from 'react-icons/si';
import { TbBrandSupabase } from 'react-icons/tb';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsTrigger, TabsList, TabsContent } from '@/components/ui/tabs';

// about data
const ABOUT = {
  title: 'About me',
  info: [
    {
      fieldName: 'Nick Name',
      fieldValue: 'DK',
    },
    {
      fieldName: 'Experience',
      fieldValue: '9+ Years',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Japanese',
    },
    {
      fieldName: 'Address',
      fieldValue: 'Chiba',
    },
    {
      fieldName: 'Hobby',
      fieldValue: 'Cooking / Training',
    },
    {
      fieldName: 'Side Job',
      fieldValue: 'Negotiable',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'Japanese',
    },
  ],
};

// experience data
const EXPERIENCE = {
  title: 'My experience',
  description:
    '大学を卒業後、営業職に従事した後にエンジニアにジョブチェンジし現在に至ります。',
  items: [
    {
      company: '福祉・介護系事業会社',
      position: 'FrontEnd Developer',
      duration: '2024 - Present',
    },
    {
      company: 'Freelance',
      position: 'FrontEnd Developer',
      duration: '2022 - 2024',
    },
    {
      company: '英会話学習系事業会社',
      position: 'FrontEnd Developer',
      duration: '2018 - 2021',
    },
    {
      company: 'SES常駐開発会社',
      position: 'Frontend Developer',
      duration: '2017 - 2018',
    },
    {
      company: 'Web制作会社',
      position: 'Frontend Developer',
      duration: '2016 - 2017',
    },
    {
      company: '金銭処理機メーカー',
      position: 'Sales',
      duration: '2012 - 2015',
    },
  ],
};

// skills data
const SKILLS = {
  title: 'My skills',
  description:
    '各技術について業務・自己学習において開発経験があります。（順不同）\n ※SupabaseとVercel以外は業務での経験があります。',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <SiTypescript />,
      name: 'typescript',
    },
    {
      icon: <FaReact />,
      name: 'react.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <FaVuejs />,
      name: 'vue.js',
    },
    {
      icon: <SiNuxtdotjs />,
      name: 'nuxt.js',
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js',
    },
    {
      icon: <SiExpress />,
      name: 'express.js',
    },
    {
      icon: <FaSass />,
      name: 'sass',
    },
    {
      icon: <SiCssmodules />,
      name: 'css modules',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
    },
    {
      icon: <SiChakraui />,
      name: 'chakra ui',
    },
    {
      icon: <SiFramer />,
      name: 'Framer motion',
    },
    {
      icon: <FaNpm />,
      name: 'npm',
    },
    {
      icon: <FaYarn />,
      name: 'yarn',
    },
    {
      icon: <SiVite />,
      name: 'vite',
    },
    {
      icon: <FaDocker />,
      name: 'docker',
    },
    {
      icon: <SiPwa />,
      name: 'pwa',
    },
    {
      icon: <SiStorybook />,
      name: 'storybook',
    },
    {
      icon: <SiJest />,
      name: 'jest',
    },
    {
      icon: <SiVitest />,
      name: 'Vitest',
    },
    {
      icon: <SiPlaywright />,
      name: 'playwright',
    },
    {
      icon: <FaGithub />,
      name: 'Github',
    },
    {
      icon: <SiGithubactions />,
      name: 'Github Actions',
    },
    {
      icon: <FaGitlab />,
      name: 'Gitlab',
    },
    {
      icon: <FaAws />,
      name: 'aws',
    },
    {
      icon: <SiServerless />,
      name: 'serverless framework',
    },
    {
      icon: <SiFirebase />,
      name: 'firebase',
    },
    {
      icon: <TbBrandSupabase />,
      name: 'supabase',
    },
    {
      icon: <SiVercel />,
      name: 'vercel',
    },
  ],
};

const ResumePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 3, duration: 0.4, ease: 'easeIn' },
      }}
      className="flex min-h-[80vh] items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col gap-[60px] xl:flex-row"
        >
          <TabsList className="mx-auto flex w-full max-w-[380px] flex-col gap-6 xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{EXPERIENCE.title}</h3>
                <p className="mx-auto max-w-screen-sm text-white/60 xl:mx-0">
                  {EXPERIENCE.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {EXPERIENCE.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="size-[6px] rounded-full bg-accent neon-accent" />
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{SKILLS.title}</h3>
                <p className="mx-auto max-w-screen-sm whitespace-pre-line text-white/60 xl:mx-0">
                  {SKILLS.description.split('\n').map((line, index) => (
                    <Fragment key={index}>
                      {line}
                      <br />
                    </Fragment>
                  ))}
                </p>
                <ScrollArea className="relative z-50 h-[400px] overflow-auto">
                  <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[25px] xl:p-5">
                    {SKILLS.skillList.map((skill, i) => (
                      <li key={i} className="relative">
                        <div className="group flex h-[150px] flex-col items-center justify-center rounded-xl bg-[#232329] transition-all duration-500 xl:hover:neon-accent">
                          <div className="text-6xl group-hover:xl:text-neon-accent">
                            {skill.icon}
                          </div>
                          <div className="absolute bottom-2 text-base capitalize opacity-100 transition-opacity duration-500 text-neon-accent xl:opacity-0 xl:group-hover:opacity-100">
                            {skill.name}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{ABOUT.title}</h3>
                <ul className="mx-auto grid max-w-[620px] grid-cols-1 gap-y-3 xl:mx-0 xl:grid-cols-2 xl:gap-y-6">
                  {ABOUT.info.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-between gap-4 xl:justify-start"
                    >
                      <span className="w-24 text-left text-white/60">
                        {item.fieldName}
                      </span>
                      <div className="flex text-center text-xl">
                        {item.fieldValue}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ResumePage;
