import { star } from '../../assets/icons';

export default function PopularProductCard({ imgURL, name, price }) {
  return (
    <div className="max-sm:w-ful flex h-[282px] w-full flex-1 flex-col">
      <img src={imgURL} alt={name} className="object-contain" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 font-palanquin text-2xl font-semibold leading-normal">
        {name}
      </h3>
      <p className="text-md mt-2 font-montserrat font-semibold leading-normal text-coral-red">
        {price}
      </p>
    </div>
  );
}
