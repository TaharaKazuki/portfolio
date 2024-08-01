const ABOUT = {
  title: 'About me',
  info: [
    { fieldName: 'Nick Name', fieldValue: 'DK' },
    { fieldName: 'Experience', fieldValue: '9+ Years' },
    { fieldName: 'Nationality', fieldValue: 'Japanese' },
    { fieldName: 'Address', fieldValue: 'Chiba' },
    { fieldName: 'Hobby', fieldValue: 'Cooking / Training' },
    { fieldName: 'Side Job', fieldValue: 'Negotiable' },
    { fieldName: 'Languages', fieldValue: 'Japanese' },
  ],
};

export const About = () => (
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{ABOUT.title}</h3>
    <ul className="mx-auto grid max-w-[620px] grid-cols-1 gap-y-3 xl:mx-0 xl:grid-cols-2 xl:gap-y-6">
      {ABOUT.info.map((item, i) => (
        <li
          key={i}
          className="flex items-center justify-between gap-4 xl:justify-start"
        >
          <span className="w-24 text-left text-white/60">{item.fieldName}</span>
          <div className="flex text-center text-xl">{item.fieldValue}</div>
        </li>
      ))}
    </ul>
  </div>
);
