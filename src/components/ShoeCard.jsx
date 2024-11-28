export default function ShoeCard({ backgroundUrl, shoeImage, onShoeChange }) {
  const activeImage =
    shoeImage === backgroundUrl.bigShoe
      ? 'border-coral-red'
      : 'border-transparent';

  function handleClick() {
    if (shoeImage !== backgroundUrl.bigShoe) {
      onShoeChange(backgroundUrl.bigShoe);
    }
  }

  return (
    <div
      className={`rounded-xl border-2 ${activeImage} cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="bg-card flex items-center justify-center rounded-xl bg-cover bg-center max-sm:p-4 sm:h-40 sm:w-40">
        <img
          src={backgroundUrl.thumbnail}
          alt="show collection"
          width={127}
          height={103.34}
          className="object-contain"
        />
      </div>
    </div>
  );
}
