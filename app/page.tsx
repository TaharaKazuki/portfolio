import { FiDownload } from 'react-icons/fi';

import Social from '@/components/Social';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pb-24 xl:pt-8">
          <div className="text-center xl:text-left">
            <span className="text-xl">Frontend Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-accent">DK</span>
            </h1>
            <p className="mb-9 max-w-[500px] text-white/80">
              I specialize in the frontend domain and excel at it, with a
              particular emphasis on a strong proficiency in TypeScript.
            </p>
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <Button
                variant={'outline'}
                size="lg"
                className="flex items-center gap-2 uppercase"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social />
              </div>
            </div>
          </div>
          <div>Photo</div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
