import React from 'react';
import Sidebar from '@/app/Components/SideBar';

export interface layoutProps {
  children: React.ReactNode;
}

export default function layout({ children }: layoutProps) {
  return (
    <>
      <Sidebar />;<div className="ml-60">{children}</div>
    </>
  );
}
