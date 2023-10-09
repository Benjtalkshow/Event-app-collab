import MobileSidebar from "./MobileSidebar";
import search from "../assets/svgs/search-normal.svg";
import notification from "../assets/svgs/nav-notification.svg";
import Image from "next/image";
import {useRouter} from "next/router";

export const Navbar = () => {
  const router = useRouter();
  const profilePic =
    "https://img.freepik.com/free-photo/beautiful-african-woman-face-portrait-close-up_53876-148041.jpg";
  return (
    <div className='flex items-center px-10 py-4 border-b border-lightGrey'>
      <MobileSidebar />
      <div className='flex justify-end items-center lg:justify-between w-full'>
        {router.pathname === "/settings" ? (
          <p className='font-semibold text-2xl hidden lg:flex'>Settings</p>
        ) : (
          <div className='hidden lg:flex p-3 gap-2 border-lightGrey border rounded-lg w-[625px]'>
            <Image src={search} width={24} height={24} alt='search icon' />
            <input
              placeholder='Search for an event'
              className='outline-none focus:none text-lg'
            />
          </div>
        )}

        <div className='flex items-center gap-2'>
          <div className='hidden lg:block w-10 h-10  mx-auto rounded-full overflow-hidden'>
            <Image
              loader={() => profilePic}
              src={profilePic}
              alt='User profile picture'
              className='object-cover w-full h-full'
              layout='fixed'
              width={100}
              height={100}
            />
          </div>
          <p className='hidden lg:block font-inter font-semibold'>Hello Tam!</p>
          <Image
            src={notification}
            width={24}
            height={24}
            alt='notification icon'
            className='cursor-pointer'
          />
        </div>
      </div>
    </div>
  );
};
