import {constantSidebar} from "@/constants/sidebar";

import useAuth from "@/modules/auth/hooks/useAuth";

import {NavLink} from "react-router-dom";

import IconDashboard from "./icons/IconDashboard";

import IconUsers from "./icons/IconUsers";

import IconContestant from "./icons/IconContestant";

import IconJudge from "./icons/IconJudge";

import IconCompetition from "./icons/IconCompetition";

import IconContent from "./icons/IconContent";

import IconChevronLeft from "./icons/IconChevronLeft";

const icons = {
  dashboard: <IconDashboard />,
  users: <IconUsers />,
  contestant: <IconContestant />,
  judge: <IconJudge />,
  content: <IconContent />,
  competition: <IconCompetition />,
} as const;

const Sidebar = () => {
  const {userData} = useAuth();

  const responsiveAsideClasses =
    "w-sidebar-width-narrow lg:w-sidebar-width lg:peer-checked:w-sidebar-width-narrow peer-checked:w-sidebar-width";

  return (
    <aside
      className={`fixed bottom-0 start-0 top-0 z-40 h-full border-e border-e-neutral-border bg-neutral-bg transition-all ${responsiveAsideClasses}`}
    >
      {/* toggle sidebar button  */}
      <label
        htmlFor='toggle-sidebar'
        className='absolute end-0 top-2rem flex h-2rem w-2rem translate-x-1/2 cursor-pointer items-center justify-center rounded-full border border-neutral-border bg-neutral-bg transition-all hover:border-primary'
      >
        <IconChevronLeft />
      </label>

      {/* start logo  */}
      <div className='invisible mb-1rem flex h-header-height items-end justify-center px-container-padding pb-0.125rem peer-nested:visible lg:visible lg:peer-nested:invisible'>
        <img src='/logo.svg' alt='SGT' className='w-[4.74681rem]' />
      </div>
      {/* ********* end  */}

      <nav className='px-container-padding'>
        {userData?.role &&
          constantSidebar[userData?.role].map((item) => (
            <NavLink
              {...item}
              key={item.path}
              to={item.path}
              className={({isActive}) => {
                const classes =
                  "relative flex h-3.5rem items-center gap-0.62rem rounded-0.75rem text-14 font-semibold text-neutral-500 transition-all hover:text-white";
                const responsiveLinkClasses =
                  "justify-center px-0.5rem peer-nested:justify-normal peer-nested:px-1.25rem lg:justify-normal lg:px-1.25rem lg:peer-nested:justify-center lg:peer-nested:px-0.5rem";
                return isActive
                  ? `${classes} ${responsiveLinkClasses} bg-gradient-btn text-white`
                  : `${classes} ${responsiveLinkClasses}`;
              }}
            >
              {icons[item.icon as keyof typeof icons]}
              <span className='hidden peer-nested:inline-block lg:inline-block lg:peer-nested:hidden'>
                {item.title}
              </span>
            </NavLink>
          ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
