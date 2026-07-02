import React from 'react';
import { Search } from 'lucide-react';

function SearchBar({ value, onChange, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="w-full bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2.5 flex items-center justify-between shadow-lg"
    >
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search for a city..."
        className="w-full bg-transparent text-white text-sm md:text-base font-light placeholder-white/40 focus:outline-none pr-3"
      />

      <button
        type="submit"
        className="text-white/60 hover:text-white transition-colors"
      >
        <Search size={18} />
      </button>
    </form>
  );
}

export default SearchBar;