'use client';
import { useState } from 'react';

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center md:hidden">
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <button 
        className="px-3 py-2 border rounded bg-gray-800 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
      </button>
      {isOpen && (
        <nav className="absolute top-16 left-0 w-full bg-gray-800 text-white p-4">
          <ul className="space-y-2">
            <li><a href="/dashboard" className="block p-2">Dashboard</a></li>
            <li><a href="/dashboard/customers" className="block p-2">Customers</a></li>
            <li><a href="/dashboard/invoices" className="block p-2">Invoices</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
