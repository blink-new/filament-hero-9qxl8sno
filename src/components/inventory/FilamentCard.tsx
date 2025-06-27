import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { MoreVertical, Edit, Trash2, Weight, Printer } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface FilamentCardProps {
  filament: {
    id: string;
    photoUrl?: string;
    brand: string;
    material: string;
    color: string;
    remaining: number;
    inUse?: boolean;
    lowStock?: boolean;
  };
  onSelect: (id: string, selected: boolean) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdateWeight: (id: string) => void;
  onAssignPrinter: (id: string) => void;
  isSelected: boolean;
}

const FilamentCard: React.FC<FilamentCardProps> = ({
  filament,
  onSelect,
  onEdit,
  onDelete,
  onUpdateWeight,
  onAssignPrinter,
  isSelected,
}) => {
  return (
    <Card className="bg-gray-800 border-gray-700 relative overflow-hidden group">
      <CardContent className="p-4">
        <div className="absolute top-2 left-2 z-10">
          <Checkbox
            checked={isSelected}
            onCheckedChange={(checked) => onSelect(filament.id, !!checked)}
            className="data-[state=checked]:bg-orange-500 data-[state=checked]:text-white"
          />
        </div>
        <div className="relative w-full h-40 bg-gray-700 rounded-md mb-4 overflow-hidden">
          {filament.photoUrl ? (
            <img src={filament.photoUrl} alt={filament.brand} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              No Image
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-2 left-2 text-white font-semibold text-lg">
            {filament.brand}
          </div>
          <div className="absolute bottom-2 right-2 text-sm font-medium px-2 py-1 rounded-full bg-orange-500 text-white">
            {filament.material}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Color: {filament.color}</span>
            {filament.inUse && (
              <span className="text-blue-400 text-xs flex items-center">
                <Printer className="w-3 h-3 mr-1" /> In Use
              </span>
            )}
            {filament.lowStock && (
              <span className="text-red-500 text-xs flex items-center">
                <Weight className="w-3 h-3 mr-1" /> Low Stock
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-full h-2 bg-gray-700 rounded-full">
              <div className={`h-full rounded-full ${filament.remaining < 25 ? "bg-red-500" : "bg-orange-500"}`} style={{ width: `${filament.remaining}%` }} />
            </div>
            <span className="text-white text-sm">{filament.remaining}%</span>
          </div>
        </div>

        <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-3">
            <Button variant="secondary" size="icon" className="bg-gray-700 hover:bg-gray-600 text-white" onClick={() => onEdit(filament.id)}>
              <Edit className="w-4 h-4" />
            </Button>
            <Button variant="secondary" size="icon" className="bg-gray-700 hover:bg-gray-600 text-white" onClick={() => onDelete(filament.id)}>
              <Trash2 className="w-4 h-4" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="bg-gray-700 hover:bg-gray-600 text-white">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-800 border-gray-700 text-white">
                <DropdownMenuItem onClick={() => onUpdateWeight(filament.id)}>Update Weight</DropdownMenuItem>
                <DropdownMenuItem onClick={() => onAssignPrinter(filament.id)}>Assign Printer</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FilamentCard;