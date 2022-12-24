import React, { useState } from 'react';

function NavBar() {
  const [textColor, setTextColor] = useState('');
  const [targetedItem, setTargetedItem] = useState('');

  return (
    <ul className="flex gap-7 text-stone-500">
      <li className="relative">
        <button
          onMouseEnter={(e) => {
            setTextColor('text-[#1D2025]');
            setTargetedItem(e.target.innerText);
          }}
          onMouseLeave={() => {
            setTextColor('');
            setTargetedItem('');
          }}
          className={`${targetedItem === 'Collections' && textColor}`}
        >
          Collections
        </button>
        {targetedItem === 'Collections' && <HoverLine />}
      </li>
      <li className="relative">
        <button
          onMouseEnter={(e) => {
            setTextColor('text-[#1D2025]');
            setTargetedItem(e.target.innerText);
          }}
          onMouseLeave={() => {
            setTextColor('');
            setTargetedItem('');
          }}
          className={`${targetedItem === 'Men' && textColor}`}
        >
          Men
        </button>
        {targetedItem === 'Men' && <HoverLine />}
      </li>
      <li className="relative">
        <button
          onMouseEnter={(e) => {
            setTextColor('text-[#1D2025]');
            setTargetedItem(e.target.innerText);
          }}
          onMouseLeave={() => {
            setTextColor('');
            setTargetedItem('');
          }}
          className={`${targetedItem === 'Women' && textColor}`}
        >
          Women
        </button>
        {targetedItem === 'Women' && <HoverLine />}
      </li>
      <li className="relative">
        <button
          onMouseEnter={(e) => {
            setTextColor('text-[#1D2025]');
            setTargetedItem(e.target.innerText);
          }}
          onMouseLeave={() => {
            setTextColor('');
            setTargetedItem('');
          }}
          className={`${targetedItem === 'About' && textColor}`}
        >
          About
        </button>
        {targetedItem === 'About' && <HoverLine />}
      </li>
      <li className="relative">
        <button
          onMouseEnter={(e) => {
            setTextColor('text-[#1D2025]');
            setTargetedItem(e.target.innerText);
          }}
          onMouseLeave={() => {
            setTextColor('');
            setTargetedItem('');
          }}
          className={`${targetedItem === 'Contract' && textColor}`}
        >
          Contract
        </button>
        {targetedItem === 'Contract' && <HoverLine />}
      </li>
    </ul>
  );
}

function HoverLine() {
  return (
    <div className="bg-[#FF7D1A] h-[4px] w-[100%] absolute translate-y-10"></div>
  );
}

export default NavBar;
