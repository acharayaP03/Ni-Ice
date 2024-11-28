import { arrowRight } from '../../assets/icons';

import Statistics from '../../components/HeroSection/Statistics';
import { Button, Paragraph } from '../../ui';
const Hero = () => {
  return (
    <section
      id="home"
      className="max-container xs:padding-1 wide:padding-r padding-b flex min-h-screen w-full flex-col justify-center gap-10 xl:flex-row"
    >
      <div className="xl:2/5 max-xl:padding-x relative flex w-full flex-col items-start justify-center pt-28">
        <Paragraph
          textStyle="font-montserrat text-coral-red text-xl"
          text="Our summar collection"
        />
        <h1 className="font-palanquin mt-10 text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82]">
          <span className="xl-whitespace-nowrap relative z-10 pr-10 xl:bg-white">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red mt-3 inline-block">
            Nike
          </span> Shoes
        </h1>

        <Paragraph
          textStyle="font-montserrat text-slate-gray mb-14 mt-6 text-lg leading-8 sm:max-w-sm"
          text="Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life."
        />
        <Button label="Shop now" iconUrl={arrowRight} />
        <Statistics />
      </div>
    </section>
  );
};

export default Hero;
