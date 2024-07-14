'use client';
import CountUp from 'react-countup';

const STATS_INFO = [
  {
    num: 9,
    text: 'Years of experience',
  },
  {
    num: 7,
    text: 'Projects completed',
  },
  {
    num: 8,
    text: 'Technologies mastered',
  },
  {
    num: 400,
    text: 'contributions in 2024',
  },
];

const Stats = () => {
  return (
    <section className="pb-12 pt-4 xl:py-0">
      <div className="mx-auto flex flex-wrap gap-4 xl:max-w-none">
        {STATS_INFO.map((item, i) => {
          return (
            <div
              className="flex flex-1 items-center justify-center gap-4 xl:justify-start"
              key={i}
            >
              <div className="w-[50px] shrink-0 text-right xl:w-[130px]">
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl font-extrabold xl:text-6xl"
                />
              </div>
              <p className="max-w-[150px] text-left leading-snug text-accent xl:text-left">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;
