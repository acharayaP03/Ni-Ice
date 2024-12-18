import React from 'react';

export default function Button({ label, iconUrl }) {
  return (
    <button className="flex items-center justify-center gap-2 rounded-full border bg-coral-red px-7 py-4 font-montserrat text-lg leading-none text-white">
      {label}

      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow right icon"
          className="ml-2 h-5 w-5 rounded-full"
        />
      )}
    </button>
  );
}
