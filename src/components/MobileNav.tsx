import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Archive, PlusSquare, QrCode, Settings, Printer } from 'lucide-react';
import { cn } from "@/lib/utils";

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/inventory', icon: Archive, label: 'Inventory' },
  { to: '/add', icon: PlusSquare, label: 'Add' }, // Shortened label for mobile
  { to: '/barcodes', icon: QrCode, label: 'Barcodes' }, // Shortened label for mobile
  { to: '/settings', icon: Settings, label: 'Settings' },
  { to: '/printers', icon: Printer, label: 'Printers' },
];

const MobileNav: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 md:hidden z-50">
      <ul className="flex justify-around h-16 items-center">
        {navItems.map((item) => (
          <li key={item.label}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "flex flex-col items-center justify-center text-xs font-medium transition-colors h-full px-2",
                  isActive ? "text-orange-500" : "text-gray-400 hover:text-white"
                )
              }
            >
              <item.icon className="w-6 h-6 mb-1" />
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
