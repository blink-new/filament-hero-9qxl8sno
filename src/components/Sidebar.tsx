import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Archive, PlusSquare, QrCode, Settings, Printer, X } from 'lucide-react';
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/inventory', icon: Archive, label: 'Inventory' },
  { to: '/add', icon: PlusSquare, label: 'Add Filament' },
  { to: '/barcodes', icon: QrCode, label: '2D Barcodes' },
  { to: '/settings', icon: Settings, label: 'Settings' },
  { to: '/printers', icon: Printer, label: 'Printers' },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 p-4 transition-transform duration-300 ease-in-out md:relative md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex justify-end mb-4 md:hidden">
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <X className="w-6 h-6" />
        </button>
      </div>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                onClick={onClose} // Close sidebar on link click
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-md transition-colors ${
                    isActive
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                  }`
                }
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;