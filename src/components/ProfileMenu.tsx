import useAuth from "@/modules/auth/hooks/useAuth";

const ProfileMenu = () => {
  const {userData} = useAuth();

  return (
    <div className='dropdown dropdown-end'>
      <div tabIndex={0} role='button'>
        <img
          src={userData?.photo}
          alt='avatar'
          className='h-3rem w-3rem rounded-full object-cover'
        />
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

export default ProfileMenu;
