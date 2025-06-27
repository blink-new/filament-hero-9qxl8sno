import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ListFilter, LayoutGrid, List, PlusCircle } from 'lucide-react';

interface InventoryToolbarProps {
  onSearch: (query: string) => void;
  onFilter: (filters: any) => void; // TODO: Define proper filter type
  onViewChange: (view: 'grid' | 'list') => void;
  onBulkAction: (action: string) => void; // TODO: Define proper action type
  onAddFilament: () => void;
  currentView: 'grid' | 'list';
}

const InventoryToolbar: React.FC<InventoryToolbarProps> = ({
  onSearch,
  onFilter,
  onViewChange,
  onBulkAction,
  onAddFilament,
  currentView,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 mb-6">
      <Input
        placeholder="Search by brand, color, or notes..."
        className="max-w-sm bg-gray-700 border-gray-600 text-white placeholder-gray-400"
        onChange={(e) => onSearch(e.target.value)}
      />

      <div className="flex items-center space-x-4">
        {/* Filter Dropdowns - Placeholders for now */}
        <Button variant="outline" className="bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600">
          <ListFilter className="mr-2 h-4 w-4" /> Filter
        </Button>

        {/* View Toggle */}
        <div className="flex rounded-md shadow-sm bg-gray-700">
          <Button
            variant="outline"
            size="icon"
            className={currentView === 'grid' ? "bg-orange-500 text-white h-10 w-10" : "text-gray-300 hover:bg-gray-600 h-10 w-10"}
            onClick={() => onViewChange('grid')}
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={currentView === 'list' ? "bg-orange-500 text-white h-10 w-10" : "text-gray-300 hover:bg-gray-600 h-10 w-10"}
            onClick={() => onViewChange('list')}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>

        {/* Bulk Actions - Placeholder for now */}
        <Button variant="outline" className="bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600">
          Bulk Actions
        </Button>

        <Button className="bg-orange-500 hover:bg-orange-600 text-white" onClick={onAddFilament}>
          <PlusCircle className="mr-2 h-4 w-4" /> Add New Filament
        </Button>
      </div>
    </div>
  );
};

export default InventoryToolbar;