import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
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

interface FilamentListProps {
  filaments: Filament[];
  onSelect: (id: string, selected: boolean) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdateWeight: (id: string) => void;
  onAssignPrinter: (id: string) => void;
  selectedFilamentIds: string[];
}

const FilamentList: React.FC<FilamentListProps> = ({
  filaments,
  onSelect,
  onEdit,
  onDelete,
  onUpdateWeight,
  onAssignPrinter,
  selectedFilamentIds,
}) => {
  return (
    <div className="rounded-md border bg-gray-800 border-gray-700">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-gray-700">
            <TableHead className="w-[50px]">
              {/* Master Checkbox for bulk select */}
            </TableHead>
            <TableHead>Photo</TableHead>
            <TableHead>Spool Name</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead>Material</TableHead>
            <TableHead>Color</TableHead>
            <TableHead>Remaining</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filaments.map((filament) => (
            <TableRow key={filament.id} className="hover:bg-gray-700">
              <TableCell>
                <Checkbox
                  checked={selectedFilamentIds.includes(filament.id)}
                  onCheckedChange={(checked) => onSelect(filament.id, checked as boolean)}
                />
              </TableCell>
              <TableCell>
                <img src={filament.photoUrl} alt={filament.spoolName} className="w-12 h-12 object-cover rounded-md" />
              </TableCell>
              <TableCell className="font-medium text-white">{filament.spoolName}</TableCell>
              <TableCell className="text-gray-300">{filament.brand}</TableCell>
              <TableCell className="text-gray-300">{filament.material}</TableCell>
              <TableCell className="text-gray-300">{filament.color}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Progress value={filament.remaining} className="w-24 h-2" indicatorClassName={filament.lowStock ? "bg-red-500" : "bg-orange-500"} />
                  <span className="ml-2 text-sm text-white">{filament.remaining}%</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  {filament.inUse && <span className="flex items-center text-blue-400"><Printer size={16} className="mr-1" /> In Use</span>}
                  {filament.lowStock && <span className="flex items-center text-red-400"><AlertTriangle size={16} className="mr-1" /> Low Stock</span>}
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end space-x-2">
                  <button onClick={() => onEdit(filament.id)} className="text-orange-500 hover:underline text-sm p-2 rounded-md"><Edit size={20} /></button>
                  <button onClick={() => onDelete(filament.id)} className="text-red-500 hover:underline text-sm p-2 rounded-md"><Trash2 size={20} /></button>
                  <button onClick={() => onUpdateWeight(filament.id)} className="text-blue-500 hover:underline text-sm p-2 rounded-md"><Weight size={20} /></button>
                  <button onClick={() => onAssignPrinter(filament.id)} className="text-green-500 hover:underline text-sm p-2 rounded-md"><Package size={20} /></button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

// NOTE: The parent must pass filaments=[] unless user is 'Test user'.
export default FilamentList;