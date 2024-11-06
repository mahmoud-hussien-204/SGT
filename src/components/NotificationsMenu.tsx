import IconBell from "./icons/IconBell";

const NotificationsMenu = () => {
  return (
    <div className='dropdown dropdown-end'>
      <div tabIndex={0} role='button' className='indicator mt-[10px]'>
        <span className='badge indicator-item badge-secondary badge-xs'></span>
        <IconBell />
      </div>
      <ul
        tabIndex={0}
        className='menu dropdown-content z-[1] mt-1.5rem w-52 rounded-box bg-base-100 p-2 shadow'
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
};

export default NotificationsMenu;
