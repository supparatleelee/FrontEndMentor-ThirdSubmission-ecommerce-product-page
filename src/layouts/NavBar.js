import React from 'react';

function NavBar() {
  return (
    <ul className="flex gap-7 text-stone-500">
      <li>
        <button>Collections</button>
      </li>
      <li>
        <button>Men</button>
      </li>
      <li>
        <button>Women</button>
      </li>
      <li>
        <button>About</button>
      </li>
      <li>
        <button>Contract</button>
      </li>
    </ul>
  );
}

export default NavBar;
