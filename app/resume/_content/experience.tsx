import { ScrollArea } from '@/components/ui/scroll-area';

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
export const Experience = () => (
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
);
