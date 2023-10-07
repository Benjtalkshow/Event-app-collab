import { Button } from '@/components/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className='md:flex justify-between h-screen '>
      <div className='px-16 h-full bg-secondary text-white w-full space-y-8 md:w-1/2 flex flex-col justify-center items-start'>
        <h1 className='font-bold text-4xl max-w-[250px]'>
          Connect and Socialize
        </h1>
        <p>
          All your events in one place. Plan, share connect and socialize with
          all your cliques. All for free.
        </p>
        <div className='lg:w-[50%] w-full'>
          <Button
            className=' text-secondary w-full py-6 text-md'
            onClick={() => router.push('/login')}
          >
            Get Started
          </Button>
        </div>
      </div>
      <div className='hidden relative md:flex md:w-1/2 md:justify-center md:items-center'>
        <Image
          src='/images/holding-smartphone-hand.png'
          fill
          alt='holding smartphone'
          className=' object-cover w-full h-full'
        />
      </div>
    </main>
  );
}
