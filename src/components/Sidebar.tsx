import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { MdTimeline } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
import { FaCalendarDays, FaX } from 'react-icons/fa6';
import { SlSettings } from 'react-icons/sl';
import { cn } from '@/lib/utils';

interface SidebarProps {
  onClickX?: () => void;
  onClickLink?: () => void;
}

const routes = [
  {
    label: 'Timeline',
    path: '/timeline',
    icon: MdTimeline,
  },
  {
    label: 'My People',
    path: '/people',
    icon: IoIosPeople,
  },
  {
    label: 'Calendar',
    path: '/calendar',
    icon: FaCalendarDays,
  },
  {
    label: 'Settings',
    path: '/settings',
    icon: SlSettings,
  },
];
const Sidebar = ({ onClickLink, onClickX }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <div className='space-y-4 py-4 flex flex-col h-full text-white bg-secondary'>
      <div className='px-3 py-2 flex-1'>
        <div className='flex items-center justify-between mb-14 md:mb-0'>
          <Link href='/' className='pl-3 flex items-center md:mb-14'>
            <div className='relative w-12 h-12 mr-4'>
              <h1 className=' italic font-montserrat font-bold text-xl'>
                Wetin<span className='text-primary'>Dey</span>Sup
              </h1>
            </div>
          </Link>
          <FaX
            className='h-8 w-8 text-gray-500 hover:text-gray-200 md:hidden cursor-pointer'
            onClick={onClickX}
          />
        </div>
        <div className='space-y-1'>
          {routes.map((route) => (
            <Link
              href={route.path}
              key={route.path}
              onClick={onClickLink}
              className={cn(
                'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer  rounded-lg transition',
                pathname === route.path
                  ? 'bg-white text-secondary'
                  : 'text-white bg-none hover:bg-white/10'
              )}
            >
              <div className='flex items-center flex-1'>
                <route.icon className={cn('h-5 w-5 mr-3')} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
