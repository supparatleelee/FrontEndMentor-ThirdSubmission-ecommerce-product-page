import React from 'react';

function NavBar() {
  return (
    <ul className="flex gap-7 text-stone-500">
      <li className="relative">
        <button className="hover:text-[#1D2025] hover:border-b-4 hover:border-[#FF7D1A] pb-[37.5px] mt-11">
          Collections
        </button>
      </li>
      <li className="relative">
        <button className="hover:text-[#1D2025] hover:border-b-4 hover:border-[#FF7D1A] pb-[37.5px] mt-11">
          Men
        </button>
      </li>
      <li className="relative">
        <button className="hover:text-[#1D2025] hover:border-b-4 hover:border-[#FF7D1A] pb-[37.5px] mt-11">
          Women
        </button>
      </li>
      <li className="relative">
        <button className="hover:text-[#1D2025] hover:border-b-4 hover:border-[#FF7D1A] pb-[37.5px] mt-11">
          About
        </button>
      </li>
      <li className="relative">
        <button className="hover:text-[#1D2025] hover:border-b-4 hover:border-[#FF7D1A] pb-[37.5px] mt-11">
          Contract
        </button>
      </li>
    </ul>
  );
}

export default NavBar;
