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
} from 'react-icons/si';

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
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.',
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
      company: 'Software Development Firm',
      position: 'Junior Developer',
      duration: '2017 - 2018',
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
  ],
};

const ResumePage = () => {
  return <div>ResumePage</div>;
};

export default ResumePage;
