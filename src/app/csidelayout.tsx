import React, { ReactNode } from 'react';
import Csidebar from '@/layouts/Csiderbar';

interface CsidelayoutProps {
  children: ReactNode;
}

export default function Csidelayout({ children }: CsidelayoutProps) {
  return (
    <div className="flex main-container">
      <Csidebar />
      <main className="flex-grow bg-gray-50">{children}</main>
    </div>
  );
}
