import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlusCircle } from 'lucide-react';

interface FilamentFormProps {
  onSubmit: (data: any) => void;
  initialData?: any;
}

const FilamentForm: React.FC<FilamentFormProps> = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData || {
    spoolName: '',
    brand: '',
    color: '',
    materialType: '',
    originalWeight: '',
    currentWeightPercentage: 100,
    currentPrinter: '',
    purchaseDate: '',
    nozzleTemp: '',
    bedTemp: '',
    printSpeed: '',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (id: string, value: string) => {
    setFormData((prev: any) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Photo Upload */}
      <div className="border-2 border-dashed border-gray-700 p-6 rounded-lg text-center cursor-pointer">
        <PlusCircle className="mx-auto h-12 w-12 text-gray-500" />
        <span className="mt-2 block text-sm font-medium text-gray-400">Upload Photo</span>
      </div>

      {/* Spool Name */}
      <div>
        <Label htmlFor="spoolName">Spool Name</Label>
        <Input id="spoolName" value={formData.spoolName} onChange={handleChange} placeholder="My Red PLA" />
      </div>

      {/* Brand */}
      <div>
        <Label htmlFor="brand">Brand</Label>
        <Input id="brand" value={formData.brand} onChange={handleChange} placeholder="Prusament" />
      </div>

      {/* Color */}
      <div>
        <Label htmlFor="color">Color</Label>
        <Input id="color" value={formData.color} onChange={handleChange} placeholder="Red" />
      </div>

      {/* Material Type */}
      <div>
        <Label htmlFor="materialType">Material Type</Label>
        <Select onValueChange={(value) => handleSelectChange('materialType', value)} value={formData.materialType}>
          <SelectTrigger>
            <SelectValue placeholder="Select a material" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="PLA">PLA</SelectItem>
            <SelectItem value="PETG">PETG</SelectItem>
            <SelectItem value="ABS">ABS</SelectItem>
            <SelectItem value="ASA">ASA</SelectItem>
            <SelectItem value="TPU">TPU</SelectItem>
            <SelectItem value="PC">PC</SelectItem>
            <SelectItem value="PEEK">PEEK</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Original Weight */}
      <div>
        <Label htmlFor="originalWeight">Original Weight (g)</Label>
        <Input id="originalWeight" type="number" value={formData.originalWeight} onChange={handleChange} placeholder="1000" />
      </div>

      {/* Current Weight Percentage */}
      <div>
        <Label htmlFor="currentWeightPercentage">Current Weight %</Label>
        <Input id="currentWeightPercentage" type="range" min="0" max="100" value={formData.currentWeightPercentage} onChange={handleChange} className="w-full" />
        <span className="block text-right text-sm text-gray-400">{formData.currentWeightPercentage}%</span>
      </div>

      {/* Current Printer */}
      <div>
        <Label htmlFor="currentPrinter">Current Printer</Label>
        <Select onValueChange={(value) => handleSelectChange('currentPrinter', value)} value={formData.currentPrinter}>
          <SelectTrigger>
            <SelectValue placeholder="Select a printer (optional)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Prusa MK3S">Prusa MK3S</SelectItem>
            <SelectItem value="Ender 3">Ender 3</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Purchase Date */}
      <div>
        <Label htmlFor="purchaseDate">Purchase Date</Label>
        <Input id="purchaseDate" type="date" value={formData.purchaseDate} onChange={handleChange} />
      </div>

      {/* Print Settings (Collapsible) */}
      <div className="space-y-4 border-t border-gray-700 pt-6">
        <h2 className="text-xl font-bold text-white">Print Settings</h2>
        <div>
          <Label htmlFor="nozzleTemp">Nozzle Temperature (°C)</Label>
          <Input id="nozzleTemp" type="number" value={formData.nozzleTemp} onChange={handleChange} placeholder="215" />
        </div>
        <div>
          <Label htmlFor="bedTemp">Bed Temperature (°C)</Label>
          <Input id="bedTemp" type="number" value={formData.bedTemp} onChange={handleChange} placeholder="60" />
        </div>
        <div>
          <Label htmlFor="printSpeed">Print Speed (mm/s)</Label>
          <Input id="printSpeed" type="number" value={formData.printSpeed} onChange={handleChange} placeholder="60" />
        </div>
      </div>

      {/* Notes */}
      <div>
        <Label htmlFor="notes">Notes</Label>
        <Textarea id="notes" value={formData.notes} onChange={handleChange} placeholder="Any specific notes about this filament..." />
      </div>

      <div className="flex justify-end space-x-4">
        <Button type="button" variant="outline">Cancel</Button>
        <Button type="submit" className="bg-orange-500 hover:bg-orange-600">Save Filament</Button>
      </div>
    </form>
  );
};

export default FilamentForm;
