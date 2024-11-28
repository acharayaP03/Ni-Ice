import { useState } from 'react';

import { bigShoe1 } from '../../assets/images';
import { shoes } from '../../constants';

import ShoeCard from '../../components/ShoeCard';

export default function HeroFeaturedProduct() {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);
  return (
    <div className="bg-primary bg-hero relative flex flex-1 items-center justify-center bg-cover bg-center max-xl:py-40 xl:min-h-screen">
      <img
        className="relative z-10 object-contain"
        src={bigShoeImage}
        alt="shoe collection"
        width={610}
        height={500}
      />
      <div className="absolute -bottom-[5%] flex gap-4 max-sm:px-6 sm:left-[10%] sm:gap-6">
        {shoes.map((shoe, index) => (
          <ShoeCard
            key={index}
            backgroundUrl={shoe}
            onShoeChange={(updatedShoe) => setBigShoeImage(updatedShoe)}
            shoeImage={bigShoeImage}
          />
        ))}
      </div>
    </div>
  );
}
