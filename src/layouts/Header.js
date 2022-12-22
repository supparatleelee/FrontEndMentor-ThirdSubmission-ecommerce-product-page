import React from 'react';
import { WebsiteLogo } from '../assets/icons';
import UserMenus from '../features/userMenus/UserMenus';
import NavBar from './NavBar';

function Header() {
  return (
    <div className="flex justify-between items-center h-[25vh] border-b-[1px]">
      <div className="flex gap-3">
        <WebsiteLogo />

        <NavBar />
      </div>

      <UserMenus />
    </div>
  );
}

export default Header;
