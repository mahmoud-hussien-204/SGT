import {Link} from "react-router-dom";

import Browse from "./Browse";

import Search from "./Search";

import IconMessage from "./icons/IconMessage";

import NotificationsMenu from "./NotificationsMenu";

import ProfileMenu from "./ProfileMenu";

const Header = () => {
  const responsiveHeaderClasses =
    "start-sidebar-width-narrow lg:start-sidebar-width peer-checked:start-sidebar-width lg:peer-checked:start-sidebar-width-narrow";

  return (
    <header
      className={`fixed end-0 top-0 z-40 flex h-header-height items-center justify-between border-b border-b-neutral-border bg-neutral-bg px-container-padding transition-all ${responsiveHeaderClasses}`}
    >
      <div className='flex items-center gap-1.5rem'>
        <div className='hidden lg:block'>
          <Search />
        </div>
        <Browse />
      </div>

      <div className='flex items-center gap-2rem'>
        <Link to='/admin/chat' className='indicator mt-[10px]'>
          <span className='badge indicator-item badge-secondary badge-xs'></span>
          <IconMessage />
        </Link>
        <NotificationsMenu />
        <ProfileMenu />
      </div>
    </header>
  );
};

export default Header;
