import { arrowRight } from '@/assets/icons';
import Statistics from '@/components/HeroSection/Statistics';
import { Button, Paragraph } from '@/ui';

export default function HeroCta() {
  return (
    <div className="max-xl:padding-x relative flex w-full flex-col items-start justify-center pt-28 xl:w-2/5">
      <Paragraph
        textStyle="font-montserrat text-coral-red text-xl"
        text="Our summar collection"
      />
      <h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]">
        <span className="relative z-20 pr-10 xl:whitespace-nowrap xl:bg-white">
          The New Arrival
        </span>
        <br />
        <span className="mt-5 inline-block text-coral-red">
          [ Ni-Ice ]
        </span>{' '}
        <span className="relative z-10 mt-5 pr-10 xl:whitespace-nowrap xl:bg-white">
          Shoes
        </span>
      </h1>

      <Paragraph
        textStyle="font-montserrat text-slate-gray mb-14 mt-6 text-lg leading-8 sm:max-w-sm"
        text="Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life. Shop now for more brand collections"
      />
      <Button label="Shop now" iconUrl={arrowRight} />
      <Statistics />
    </div>
  );
}
