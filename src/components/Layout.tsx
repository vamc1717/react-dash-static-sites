
import { ReactNode } from 'react';
import Sidebar from './Sidebar';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen bg-gray-50">
      <div className="w-64 flex-shrink-0 p-4">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-auto p-4">
        <main className="h-full">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
