import React from 'react';

export default function Button({ label, iconUrl }) {
  return (
    <button className="font-montserrat bg-coral-red flex items-center justify-center gap-2 rounded-full border px-7 py-4 text-lg leading-none text-white">
      {label}
      <img
        src={iconUrl}
        alt="arrow right icon"
        className="ml-2 h-5 w-5 rounded-full"
      />
    </button>
  );
}
