import HeroCta from './HeroCta';
import HeroFeaturedProduct from './HeroFeaturedProduct';

const Hero = () => {
  return (
    <div
      id="home"
      className="max-container flex min-h-screen w-full flex-col justify-center gap-10 xl:flex-row"
    >
      <HeroCta />
      <HeroFeaturedProduct />
    </div>
  );
};

export default Hero;
