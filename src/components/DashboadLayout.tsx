import { ErrorBoundary } from 'react-error-boundary';
import Sidebar from './Sidebar';
import { Navbar } from './Navbar';

interface DashboadLayoutProps {
  children: React.ReactNode;
}

const DashboadLayout = ({ children }: DashboadLayoutProps) => {
  return (
    <ErrorBoundary
      fallback={
        <div>
          <h1>Something went wrong.</h1>
          <button onClick={() => window.location.reload()}>Refresh</button>
        </div>
      }
    >
      <>
        <div className='h-full relative'>
          <div className='hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-secondary'>
            {/* Sidebar */}
            <Sidebar />
          </div>
          <main className='md:pl-72'>
            {/* Main content */}
            <Navbar />
            {children}
          </main>
        </div>
      </>
    </ErrorBoundary>
  );
};

export default DashboadLayout;
