import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';
import { UserProvider } from '@/context/UserContext';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <UserProvider>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex flex-1">
          <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
          <main className="flex-1 p-4 md:p-6 overflow-auto pb-20 md:pb-6">{children}</main>
        </div>
        <MobileNav />
      </div>
    </UserProvider>
  );
};

export default Layout;