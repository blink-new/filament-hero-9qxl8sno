import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Printer, Edit, Trash2, Package } from 'lucide-react';
import { useUser } from '@/context/UserContext';

interface PrinterItem {
  id: string;
  name: string;
  status: 'active' | 'maintenance' | 'offline';
  currentFilament?: string;
}

const PrinterGrid: React.FC<PrinterGridProps> = ({ onEdit, onDelete, onAssignFilament, onSetStatus }) => {
  const user = useUser();
  const mockPrinters: PrinterItem[] = user.name === 'Test user' ? [
    { id: '1', name: 'Prusa MK3S', status: 'active', currentFilament: 'Red PLA' },
    { id: '2', name: 'Ender 3', status: 'maintenance', currentFilament: undefined },
    { id: '3', name: 'Anycubic Mega S', status: 'active', currentFilament: 'Galaxy Black PETG' },
    { id: '4', name: 'Creality CR-10', status: 'offline', currentFilament: undefined },
  ] : [];

  const getStatusColor = (status: PrinterItem['status']) => {
    switch (status) {
      case 'active': return 'text-green-500';
      case 'maintenance': return 'text-yellow-500';
      case 'offline': return 'text-red-500';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockPrinters.map(printer => (
        <Card key={printer.id} className="bg-gray-800 text-white shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-bold">{printer.name}</CardTitle>
            <Printer className="w-6 h-6 text-gray-400" />
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-gray-400">
              Status: <span className={`font-semibold ${getStatusColor(printer.status)}`}>{printer.status.charAt(0).toUpperCase() + printer.status.slice(1)}</span>
            </p>
            {printer.currentFilament ? (
              <p className="text-sm text-gray-400 flex items-center">
                <Package className="w-4 h-4 mr-1" /> Current Filament: <span className="font-semibold ml-1">{printer.currentFilament}</span>
              </p>
            ) : (
              <p className="text-sm text-gray-400">No filament assigned.</p>
            )}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-700">
              <Button variant="outline" size="sm" onClick={() => onEdit(printer.id)} className="border-gray-600 text-gray-400 hover:bg-gray-700 hover:text-white">
                <Edit className="w-4 h-4 mr-1" /> Edit
              </Button>
              <Button variant="outline" size="sm" onClick={() => onAssignFilament(printer.id)} className="border-gray-600 text-gray-400 hover:bg-gray-700 hover:text-white">
                <Package className="w-4 h-4 mr-1" /> Assign
              </Button>
              <Button variant="destructive" size="sm" onClick={() => onDelete(printer.id)}>
                <Trash2 className="w-4 h-4 mr-1" /> Delete
              </Button>
              <Select onValueChange={(value: PrinterItem['status']) => onSetStatus(printer.id, value)} value={printer.status}>
                <SelectTrigger className="w-[120px] bg-gray-700 border-gray-600 text-white">
                  <SelectValue placeholder="Set Status" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 text-white border-gray-700">
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                  <SelectItem value="offline">Offline</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

interface PrinterGridProps {
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onAssignFilament: (id: string) => void;
  onSetStatus: (id: string, status: 'active' | 'maintenance' | 'offline') => void;
}

export default PrinterGrid;