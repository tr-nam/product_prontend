import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <main className="flex-1 p-4 overflow-auto bg-gray-200">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
