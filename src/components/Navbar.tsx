import { useRouter } from 'next/navigation';
import MobileSidebar from './MobileSidebar';

export const Navbar = () => {
  const router = useRouter();
  return (
    <div className='flex items-center p-4'>
      <MobileSidebar />
      <div className='flex w-full justify-end'></div>
    </div>
  );
};
