import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { MoreVertical, Printer } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface FilamentTableProps {
  filaments: Filament[];
  onSelect: (id: string, selected: boolean) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdateWeight: (id: string) => void;
  onAssignPrinter: (id: string) => void;
  selectedFilamentIds: string[];
}

const FilamentTable: React.FC<FilamentTableProps> = ({
  filaments,
  onSelect,
  onEdit,
  onDelete,
  onUpdateWeight,
  onAssignPrinter,
  selectedFilamentIds,
}) => {
  return (
    <div className="rounded-md border border-gray-700 overflow-hidden">
      <Table className="w-full">
        <TableHeader className="bg-gray-800">
          <TableRow className="border-gray-700">
            <TableHead className="w-[50px]">
              <Checkbox
                // Implement select all logic later
                className="data-[state=checked]:bg-orange-500 data-[state=checked]:text-white"
              />
            </TableHead>
            <TableHead className="text-white">Photo</TableHead>
            <TableHead className="text-white">Brand</TableHead>
            <TableHead className="text-white">Material</TableHead>
            <TableHead className="text-white">Color</TableHead>
            <TableHead className="text-white">Weight %</TableHead>
            <TableHead className="text-white">Printer</TableHead>
            <TableHead className="text-white">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-gray-900">
          {filaments.map((filament) => (
            <TableRow key={filament.id} className="border-gray-700 hover:bg-gray-800">
              <TableCell>
                <Checkbox
                  checked={selectedFilamentIds.includes(filament.id)}
                  onCheckedChange={(checked) => onSelect(filament.id, !!checked)}
                  className="data-[state=checked]:bg-orange-500 data-[state=checked]:text-white"
                />
              </TableCell>
              <TableCell>
                <div className="w-16 h-16 bg-gray-700 rounded-md overflow-hidden flex items-center justify-center">
                  {filament.photoUrl ? (
                    <img src={filament.photoUrl} alt={filament.brand} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-gray-500 text-xs">No Image</span>
                  )}
                </div>
              </TableCell>
              <TableCell className="font-medium text-white">{filament.brand}</TableCell>
              <TableCell className="text-gray-300">{filament.material}</TableCell>
              <TableCell className="text-gray-300">{filament.color}</TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <div className="w-24 h-2 bg-gray-700 rounded-full">
                    <div className={`h-full rounded-full ${filament.remaining < 25 ? "bg-red-500" : "bg-orange-500"}`} style={{ width: `${filament.remaining}%` }} />
                  </div>
                  <span className="text-white text-sm">{filament.remaining}%</span>
                </div>
              </TableCell>
              <TableCell className="text-gray-300">
                {filament.inUse ? (
                  <span className="flex items-center"><Printer className="w-4 h-4 mr-1" /> In Use</span>
                ) : (
                  '-'
                )}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:bg-gray-700">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-gray-800 border-gray-700 text-white">
                    <DropdownMenuItem onClick={() => onEdit(filament.id)}>Edit</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onDelete(filament.id)}>Delete</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onUpdateWeight(filament.id)}>Update Weight</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onAssignPrinter(filament.id)}>Assign Printer</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default FilamentTable;