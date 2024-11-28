import Button from '../../ui/Button';
import { arrowRight } from '../../assets/icons';
import { statistics } from '../../constants';
const Hero = () => {
  return (
    <section
      id="home"
      className="max-container xs:padding-1 wide:padding-r padding-b flex min-h-screen w-full flex-col justify-center gap-10 xl:flex-row"
    >
      <div className="xl:2/5 max-xl:padding-x relative flex w-full flex-col items-start justify-center pt-28">
        <p className="font-montserrat text-coral-red text-xl">
          Our summar collection
        </p>
        <h1 className="font-palanquin mt-10 text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82]">
          <span className="xl-whitespace-nowrap relative z-10 pr-10 xl:bg-white">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red mt-3 inline-block">
            Nike
          </span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray mb-14 mt-6 text-lg leading-8 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />

        <div className="mt-20 flex w-full flex-wrap items-start justify-start gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="font-palanquin text-4xl font-bold">{stat.value}</p>
              <p className="font-montserrat text-slate-gray leading-7">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
