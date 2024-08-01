'use client';

import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@radix-ui/react-tooltip';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3,
  FaSass,
  FaJs,
  FaReact,
  FaNodeJs,
  FaVuejs,
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
} from 'react-icons/si';
import { TbBrandSupabase } from 'react-icons/tb';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsTrigger, TabsList, TabsContent } from '@/components/ui/tabs';

const ABOUT = {
  title: 'About me',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Luke Coleman',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+40) 321 654 678',
    },
    {
      fieldName: 'Experience',
      fieldValue: '12+ Years',
    },
    {
      fieldName: 'Skype',
      fieldValue: 'luke.01',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'American',
    },
    {
      fieldName: 'Email',
      fieldValue: 'luke.01@gmail.com',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Spanish',
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
      company: 'Tech Solutions Inc.',
      position: 'Full Stack Developer',
      duration: '2022 - Present',
    },
    {
      company: 'Web Design Studio',
      position: 'Front-End Developer Intern',
      duration: 'Summer 2021',
    },
    {
      company: 'E-commerce Startup',
      position: 'Freelance Web Developer',
      duration: '2020 - 2021',
    },
    {
      company: 'Tech Academy',
      position: 'Teaching Assistant',
      duration: '2019 - 2020',
    },
    {
      company: 'Digital Agency',
      position: 'UI/UX Designer',
      duration: '2018 - 2019',
    },
    {
      company: '近畿大学',
      position: '法学部法律学科',
      duration: '2012年3月 卒業',
    },
  ],
};

// education data
const EDUCATION = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.',
  items: [
    {
      institution: 'Online Course Platform',
      degree: 'Full Stack Web Development Bootcamp',
      duration: '2023',
    },
    {
      institution: 'Codecademy',
      degree: 'Front-end Track',
      duration: '2022',
    },
    {
      institution: 'Online Course',
      degree: 'Programming Course',
      duration: '2020 - 2021',
    },
    {
      institution: 'Tech Institute',
      degree: 'Certified Web Developer',
      duration: '2019',
    },
    {
      institution: 'Design School',
      degree: 'Diploma in Graphic Design',
      duration: '2016 - 2018',
    },
    {
      institution: 'Community College',
      degree: 'Associate Degree in Computer Science',
      duration: '2014 - 2016',
    },
  ],
};

// skills data
const SKILLS = {
  title: 'My skills',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.',
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
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <SiTypescript />,
      name: 'typescript',
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
      icon: <SiPwa />,
      name: 'pwa',
    },
    {
      icon: <TbBrandSupabase />,
      name: 'supabase',
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
            <TabsTrigger value="education">Education</TabsTrigger>
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

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{EDUCATION.title}</h3>
                <p className="mx-auto max-w-screen-sm text-white/60 xl:mx-0">
                  {EDUCATION.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {EDUCATION.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="size-[6px] rounded-full bg-accent neon-accent" />
                          <p className="text-white/60">{item.institution}</p>
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
                <p className="mx-auto max-w-screen-sm text-white/60 xl:mx-0">
                  {SKILLS.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 gap-4 p-5 sm:grid-cols-3 md:grid-cols-4 xl:gap-[25px]">
                    {SKILLS.skillList.map((skill, i) => (
                      <li key={i}>
                        <TooltipProvider delayDuration={0}>
                          <Tooltip>
                            <TooltipTrigger className="group flex h-[150px] w-full items-center justify-center rounded-xl bg-[#232329] transition-all duration-300 xl:hover:neon-accent">
                              <TooltipContent
                                side="top"
                                align="center"
                                className="relative top-10 block"
                              >
                                <p className="capitalize text-neon-accent">
                                  {skill.name}
                                </p>
                              </TooltipContent>
                              <div className="text-6xl group-hover:xl:text-neon-accent">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent value="about" className="w-full">
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
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ResumePage;
