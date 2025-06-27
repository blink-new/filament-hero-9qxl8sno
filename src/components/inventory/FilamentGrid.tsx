import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Package, Printer, AlertTriangle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface Filament {
  id: string;
  spoolName: string;
  photoUrl: string;
  brand: string;
  material: string;
  color: string;
  remaining: number;
  inUse: boolean;
  lowStock: boolean;
}

interface FilamentGridProps {
  filaments: Filament[];
  onSelect: (id: string, selected: boolean) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdateWeight: (id: string) => void;
  onAssignPrinter: (id: string) => void;
  selectedFilamentIds: string[];
}

const FilamentGrid: React.FC<FilamentGridProps> = ({
  filaments,
  onSelect,
  onEdit,
  onDelete,
  onUpdateWeight,
  onAssignPrinter,
  selectedFilamentIds,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filaments.map((filament) => (
        <div key={filament.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden relative">
          <div className="absolute top-3 left-3 z-10">
            <Checkbox
              checked={selectedFilamentIds.includes(filament.id)}
              onCheckedChange={(checked) => onSelect(filament.id, checked as boolean)}
            />
          </div>
          <img src={filament.photoUrl} alt={filament.spoolName} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-white mb-2">{filament.spoolName}</h3>
            <p className="text-gray-400 text-sm">{filament.brand} - {filament.material} ({filament.color})</p>
            
            <div className="mt-4">
              <div className="flex justify-between items-center text-sm text-gray-300">
                <span>Remaining:</span>
                <span>{filament.remaining}%</span>
              </div>
              <Progress value={filament.remaining} className="w-full h-2 mt-1" />
            </div>

            {filament.inUse && (
              <div className="flex items-center text-sm text-gray-400 mt-2">
                <Printer size={16} className="mr-1" /> In Use
              </div>
            )}
            {filament.lowStock && (
              <div className="flex items-center text-sm text-red-400 mt-2">
                <AlertTriangle size={16} className="mr-1" /> Low Stock!
              </div>
            )}

            <div className="flex justify-between mt-4 space-x-2">
              <button onClick={() => onEdit(filament.id)} className="text-orange-500 hover:underline text-sm p-2 rounded-md"><Edit size={20} /></button>
              <button onClick={() => onDelete(filament.id)} className="text-red-500 hover:underline text-sm p-2 rounded-md"><Trash2 size={20} /></button>
              <button onClick={() => onUpdateWeight(filament.id)} className="text-blue-500 hover:underline text-sm p-2 rounded-md"><Weight size={20} /></button>
              <button onClick={() => onAssignPrinter(filament.id)} className="text-green-500 hover:underline text-sm p-2 rounded-md"><Package size={20} /></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// NOTE: The parent must pass filaments=[] unless user is 'Test user'.
export default FilamentGrid;