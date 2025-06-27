import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Download } from 'lucide-react';

import { useUser } from '@/context/UserContext';

interface Filament {
  id: string;
  spoolName: string;
  brand: string;
  materialType: string;
  color: string;
}

const BulkBarcodeGenerator: React.FC = () => {
  const user = useUser();
  const [selectedFilaments, setSelectedFilaments] = useState<string[]>([]);
  const [generationProgress, setGenerationProgress] = useState(0);

  const mockFilaments: Filament[] = user.name === 'Test user' ? [
    { id: '1', spoolName: 'Red PLA', brand: 'Prusament', materialType: 'PLA', color: '#FF0000' },
    { id: '2', spoolName: 'Galaxy Black PETG', brand: 'Prusament', materialType: 'PETG', color: '#333333' },
    { id: '3', spoolName: 'Orange ABS', brand: 'Hatchbox', materialType: 'ABS', color: '#FFA500' },
    { id: '4', spoolName: 'Blue TPU', brand: 'FilamentOne', materialType: 'TPU', color: '#0000FF' },
  ] : [];

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedFilaments(mockFilaments.map(f => f.id));
    } else {
      setSelectedFilaments([]);
    }
  };

  const handleSelectFilament = (id: string, checked: boolean) => {
    setSelectedFilaments(prev =>
      checked ? [...prev, id] : prev.filter(item => item !== id)
    );
  };

  const handleGenerateBulk = async () => {
    setGenerationProgress(0);
    // Simulate generation process
    for (let i = 0; i < selectedFilaments.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 100)); // Simulate work
      setGenerationProgress(Math.round(((i + 1) / selectedFilaments.length) * 100));
    }
    alert('Bulk QR codes generated! (Check console for data)');
    console.log('Generated QR codes for:', selectedFilaments.map(id => {
      const filament = mockFilaments.find(f => f.id === id);
      return { id: filament?.id, name: filament?.spoolName, qrData: JSON.stringify({ id: filament?.id, name: filament?.spoolName }) };
    }));
  };

  return (
    <div className="space-y-6 p-6 bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-white">Bulk Barcode Generator</h2>

      <div>
        <div className="flex items-center space-x-2 mb-4">
          <Checkbox
            id="select-all"
            checked={selectedFilaments.length === mockFilaments.length && mockFilaments.length > 0}
            onCheckedChange={handleSelectAll}
          />
          <Label htmlFor="select-all">Select All Filaments</Label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-60 overflow-y-auto pr-2">
          {mockFilaments.map(filament => (
            <div key={filament.id} className="flex items-center space-x-2 bg-gray-700 p-3 rounded-md">
              <Checkbox
                id={filament.id}
                checked={selectedFilaments.includes(filament.id)}
                onCheckedChange={(checked) => handleSelectFilament(filament.id, checked as boolean)}
              />
              <Label htmlFor={filament.id}>{filament.spoolName} ({filament.brand})</Label>
            </div>
          ))}
        </div>
      </div>

      <Button
        onClick={handleGenerateBulk}
        disabled={selectedFilaments.length === 0}
        className="w-full bg-orange-500 hover:bg-orange-600"
      >
        <Download className="w-5 h-5 mr-2" /> Generate Bulk QR Codes
      </Button>

      {generationProgress > 0 && generationProgress < 100 && (
        <div className="space-y-2">
          <Label>Generation Progress</Label>
          <Progress value={generationProgress} className="w-full h-2" indicatorClassName="bg-orange-500" />
          <span className="text-sm text-gray-400">{generationProgress}% Complete</span>
        </div>
      )}

      {generationProgress === 100 && (
        <p className="text-green-500 text-center">Generation Complete!</p>
      )}
    </div>
  );
};

export default BulkBarcodeGenerator;