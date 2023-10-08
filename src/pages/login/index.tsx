import { Button } from '@/components/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaXTwitter } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const router = useRouter();
  return (
    <main className='font-inter md:flex justify-between h-screen '>
      <div className='hidden md:flex md:flex-col md:w-1/2 md:justify-center md:items-center px-10'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-bold text-2xl'>Welcome on Board!</h1>
          <p className=' text-primary-grey'>Were glad your’e here</p>
        </div>
        <Image
          src='/images/welcome-onboard.png'
          width={500}
          height={500}
          alt='holding smartphone'
          className='object-contain'
        />
      </div>
      <div className='px-16 h-full bg-secondary text-white w-full space-y-8 md:w-1/2 flex flex-col justify-center items-start'>
        <h1 className='font-bold text-2xl '>Sign In or Create an Account</h1>
        <div className=' w-full space-y-5'>
          <Button
            className=' bg-white hover:bg-white/80 text-secondary w-full py-8 text-md'
            onClick={() => router.push('/timeline')}
          >
            <FcGoogle className='inline-block mr-2 text-3xl' />
            Continue with Google
          </Button>
          <Button
            className=' text-secondary w-full py-8 text-md'
            onClick={() => router.push('/timeline')}
          >
            <FaXTwitter className='inline-block mr-2 text-3xl' />
            Continue with Twitter
          </Button>
          <div></div>
        </div>
      </div>
    </main>
  );
};

export default Login;
