import { Fragment } from 'react';
import { FaGitlab } from 'react-icons/fa';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaSass,
  FaNpm,
  FaYarn,
  FaDocker,
  FaGithub,
  FaAws,
} from 'react-icons/fa6';
import {
  SiTypescript,
  SiNextdotjs,
  SiNuxtdotjs,
  SiExpress,
  SiCssmodules,
  SiTailwindcss,
  SiChakraui,
  SiFramer,
  SiVite,
  SiPwa,
  SiStorybook,
  SiJest,
  SiVitest,
  SiPlaywright,
  SiGithubactions,
  SiFirebase,
  SiVercel,
  SiShadcnui,
} from 'react-icons/si';
import { TbBrandSupabase } from 'react-icons/tb';

import { ScrollArea } from '@/components/ui/scroll-area';

const SKILLS = {
  title: 'My skills',
  description:
    '各技術について業務・自己学習において開発経験があります。（順不同）\n ※SupabaseとVercel以外は業務での経験があります。',
  skillList: [
    { icon: <FaHtml5 />, name: 'html 5' },
    { icon: <FaCss3 />, name: 'css 3' },
    { icon: <FaJs />, name: 'javascript' },
    { icon: <SiTypescript />, name: 'typescript' },
    { icon: <FaReact />, name: 'react.js' },
    { icon: <SiNextdotjs />, name: 'next.js' },
    { icon: <FaVuejs />, name: 'vue.js' },
    { icon: <SiNuxtdotjs />, name: 'nuxt.js' },
    { icon: <FaNodeJs />, name: 'node.js' },
    { icon: <SiExpress />, name: 'express.js' },
    { icon: <FaSass />, name: 'sass' },
    { icon: <SiCssmodules />, name: 'css modules' },
    { icon: <SiTailwindcss />, name: 'tailwind.css' },
    { icon: <SiChakraui />, name: 'chakra ui' },
    { icon: <SiShadcnui />, name: 'shadcn ui' },
    { icon: <SiFramer />, name: 'Framer motion' },
    { icon: <FaNpm />, name: 'npm' },
    { icon: <FaYarn />, name: 'yarn' },
    { icon: <SiVite />, name: 'vite' },
    { icon: <FaDocker />, name: 'docker' },
    { icon: <SiPwa />, name: 'pwa' },
    { icon: <SiStorybook />, name: 'storybook' },
    { icon: <SiJest />, name: 'jest' },
    { icon: <SiVitest />, name: 'Vitest' },
    { icon: <SiPlaywright />, name: 'playwright' },
    { icon: <FaGithub />, name: 'Github' },
    { icon: <SiGithubactions />, name: 'Github Actions' },
    { icon: <FaGitlab />, name: 'Gitlab' },
    { icon: <FaAws />, name: 'aws' },
    { icon: <SiFirebase />, name: 'firebase' },
    { icon: <TbBrandSupabase />, name: 'supabase' },
    { icon: <SiVercel />, name: 'vercel' },
  ],
};

export const Skills = () => (
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
              <div className="absolute bottom-4 text-base capitalize opacity-100 transition-opacity duration-500 text-neon-accent xl:opacity-0 xl:group-hover:opacity-100">
                {skill.name}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </ScrollArea>
  </div>
);
