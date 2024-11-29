import { products } from '@/constants';
import PopularProductCard from '../../components/PopularProduct/PopularProductCard';

export default function PopularProduct() {
  return (
    <div className="max-container max-sm:mt-12" id="products">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="font-palanquin text-4xl font-bold">
          Our <span className="text-coral-red">People's </span>choice
        </h2>
        <p className="mt-2 font-montserrat text-slate-gray lg:max-w-lg">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </div>
  );
}
