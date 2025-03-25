import React from 'react';
import Image from 'next/image';
import SideBarItem from '@/app/Components/SideBarItem';

export interface SideBarProps {}

export default function Sidebar({}: SideBarProps) {
  return (
    <aside className="fixed top-0 left-0 z-40 w-60 h-screen">
      <div className="flex flex-col h-full overflow-y-auto bg-gray-900">
        <Image
          className="py-8 mb-11 mx-auto"
          width={122}
          height={25}
          src="/icons/logo.svg"
          alt="logo"
        />
        <ul className="space-y-7">
          <SideBarItem
            pathname="/dashboard"
            src="/icons/squares.svg"
            alt="dashboard icon"
          >
            Dashboard
          </SideBarItem>
          <SideBarItem
            pathname="/companies"
            src="/icons/case.svg"
            alt="companies icon"
          >
            Companies
          </SideBarItem>
        </ul>
        <button className="flex items-center gap-2 p-6 mt-auto mx-auto">
          <Image
            width={18}
            height={18}
            src="/icons/arrowLeft.svg"
            alt="exit icon"
          />
          <span className="font-medium text-white">Exit</span>
        </button>
      </div>
    </aside>
  );
}
