import React, { ReactNode } from 'react';
import Sidebar from '@/layouts/Sidebar';

interface SidelayoutProps {
  children: ReactNode;
}

export default function Sidelayout({ children }: SidelayoutProps) {
  return (
    <div className="w-full flex">
      <Sidebar  />
      <main className="flex-grow bg-gray-50 overflow-y-auto">{children}</main>
    </div>
  );
}
