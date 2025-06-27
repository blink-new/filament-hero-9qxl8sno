import { useState, useEffect } from 'react';
import InventoryToolbar from '../components/inventory/InventoryToolbar';
import FilamentGrid from '../components/inventory/FilamentGrid';
import FilamentList from '../components/inventory/FilamentList';
import { Button } from "@/components/ui/button";
import { PlusCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { supabase, type Filament } from '@/lib/supabaseClient';
import { toast } from 'react-hot-toast';

const Inventory = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [selectedFilamentIds, setSelectedFilamentIds] = useState<string[]>([]);
  const [filaments, setFilaments] = useState<Filament[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch filaments from Supabase
  const fetchFilaments = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('filaments')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching filaments:', error);
        toast.error('Failed to load filaments');
      } else {
        // Transform database format to component format
        const transformedFilaments = data.map(item => ({
          id: item.id,
          spoolName: item.spool_name,
          photoUrl: item.photo_url || 'https://source.unsplash.com/random/300x300?filament',
          brand: item.brand || 'Unknown',
          material: item.material || 'PLA',
          color: item.color || 'Unknown',
          remaining: item.remaining_percent || 0,
          inUse: item.in_use || false,
          lowStock: (item.remaining_percent || 0) <= (item.low_stock_threshold || 20),
        }));
        setFilaments(transformedFilaments);
      }
    } catch (error) {
      console.error('Error fetching filaments:', error);
      toast.error('Failed to load filaments');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFilaments();
  }, [user]);

  const handleSearch = (searchTerm: string) => {
    console.log('Searching for:', searchTerm);
    // Implement actual search logic later
  };

  const handleFilter = (filters: Record<string, unknown>) => {
    console.log('Filtering with:', filters);
    // Implement actual filter logic later
  };

  const handleBulkAction = (action: string, filamentIds: string[]) => {
    console.log('Bulk action:', action, 'on filaments:', filamentIds);
    // Implement actual bulk action logic later
  };

  const handleViewChange = (newView: 'grid' | 'list') => {
    setView(newView);
  };

  const handleSelectFilament = (filamentId: string) => {
    setSelectedFilamentIds(prev => 
      prev.includes(filamentId) 
        ? prev.filter(id => id !== filamentId)
        : [...prev, filamentId]
    );
  };

  const handleSelectAll = () => {
    setSelectedFilamentIds(
      selectedFilamentIds.length === filaments.length ? [] : filaments.map(f => f.id)
    );
  };

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-slate-700 rounded w-1/4"></div>
          <div className="h-12 bg-slate-700 rounded"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="h-64 bg-slate-700 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Filament Inventory</h1>
          <p className="text-gray-400 mt-1">
            {filaments.length === 0 
              ? 'No filaments found. Add your first spool to get started!' 
              : `Managing ${filaments.length} spool${filaments.length !== 1 ? 's' : ''}`
            }
          </p>
        </div>
        <Button
          onClick={() => navigate('/add')}
          className="bg-orange-600 hover:bg-orange-700 text-white"
        >
          <PlusCircle className="w-4 h-4 mr-2" />
          Add Filament
        </Button>
      </div>

      {filaments.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-24 h-24 mx-auto bg-slate-700 rounded-full flex items-center justify-center mb-4">
            <PlusCircle className="w-12 h-12 text-slate-400" />
          </div>
          <h3 className="text-xl font-medium text-white mb-2">No filaments yet</h3>
          <p className="text-slate-400 mb-6 max-w-md mx-auto">
            Start building your filament inventory by adding your first spool. Track colors, materials, and usage all in one place.
          </p>
          <Button
            onClick={() => navigate('/add')}
            className="bg-orange-600 hover:bg-orange-700 text-white"
          >
            <PlusCircle className="w-4 h-4 mr-2" />
            Add Your First Filament
          </Button>
        </div>
      ) : (
        <>
          <InventoryToolbar
            onSearch={handleSearch}
            onFilter={handleFilter}
            onViewChange={handleViewChange}
            onBulkAction={handleBulkAction}
            currentView={view}
            selectedCount={selectedFilamentIds.length}
          />

          {view === 'grid' ? (
            <FilamentGrid
              filaments={filaments}
              selectedFilamentIds={selectedFilamentIds}
              onSelectFilament={handleSelectFilament}
              onSelectAll={handleSelectAll}
            />
          ) : (
            <FilamentList
              filaments={filaments}
              selectedFilamentIds={selectedFilamentIds}
              onSelectFilament={handleSelectFilament}
              onSelectAll={handleSelectAll}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Inventory;