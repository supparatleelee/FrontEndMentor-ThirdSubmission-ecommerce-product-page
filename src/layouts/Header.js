import React from 'react';
import { WebsiteLogo } from '../assets/icons';
import UserMenus from '../features/userMenus/UserMenus';
import NavBar from './NavBar';

function Header() {
  return (
    <div className="flex justify-between items-center h-[14vh] border-b-[1px]">
      <div className="flex gap-12">
        <button>
          <WebsiteLogo />
        </button>

        <NavBar />
      </div>

      <UserMenus />
    </div>
  );
}

export default Header;
