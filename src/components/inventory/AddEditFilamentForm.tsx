import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { UploadCloud } from 'lucide-react';
import { format } from 'date-fns';

interface AddEditFilamentFormProps {
  initialData?: Partial<Filament>;
  onSubmit: (data: Filament) => void;
  onCancel: () => void;
}

const materialTypes = ['PLA', 'PETG', 'ABS', 'ASA', 'TPU', 'PC', 'PEEK'];
const weightPresets = [250, 500, 1000, 2000, 5000];

const AddEditFilamentForm: React.FC<AddEditFilamentFormProps> = ({
  initialData,
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState<Partial<Filament>>({
    spoolName: initialData?.spoolName || '',
    brand: initialData?.brand || '',
    color: initialData?.color || '',
    material: initialData?.material || '',
    originalWeight: initialData?.originalWeight || 1000,
    currentWeightPercentage: initialData?.currentWeightPercentage || 100,
    purchaseDate: initialData?.purchaseDate ? new Date(initialData.purchaseDate) : undefined,
    nozzleTemp: initialData?.nozzleTemp || undefined,
    bedTemp: initialData?.bedTemp || undefined,
    printSpeed: initialData?.printSpeed || undefined,
    notes: initialData?.notes || '',
    photoUrl: initialData?.photoUrl || undefined,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (id: keyof Filament, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSliderChange = (value: number[]) => {
    setFormData((prev) => ({ ...prev, currentWeightPercentage: value[0] }));
  };

  const handleDateChange = (date: Date | undefined) => {
    setFormData((prev) => ({ ...prev, purchaseDate: date }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, photoUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData as Filament);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 p-6 bg-gray-800 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <Label htmlFor="photo-upload" className="block text-sm font-medium text-gray-300 mb-2">Filament Photo</Label>
            <div
              className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-700 rounded-lg cursor-pointer bg-gray-900 hover:bg-gray-700 transition-colors"
              onClick={() => document.getElementById('photo-input')?.click()}
            >
              {formData.photoUrl ? (
                <img src={formData.photoUrl} alt="Filament Preview" className="w-full h-full object-cover rounded-lg" />
              ) : (
                <>
                  <UploadCloud className="w-10 h-10 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-400">Drag & drop or click to upload</p>
                </>
              )}
              <Input id="photo-input" type="file" className="hidden" onChange={handlePhotoUpload} accept="image/*" />
            </div>
          </div>

          <div>
            <Label htmlFor="spoolName">Spool Name</Label>
            <Input id="spoolName" value={formData.spoolName} onChange={handleInputChange} placeholder="My Red PLA" />
          </div>

          <div>
            <Label htmlFor="brand">Brand</Label>
            <Input id="brand" value={formData.brand} onChange={handleInputChange} placeholder="Prusament" />
          </div>

          <div>
            <Label htmlFor="color">Color</Label>
            <Input id="color" value={formData.color} onChange={handleInputChange} placeholder="Red" />
            {/* TODO: Add color picker */}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div>
            <Label htmlFor="materialType">Material Type</Label>
            <Select onValueChange={(value) => handleSelectChange('material', value)} value={formData.material}>
              <SelectTrigger className="w-full bg-gray-900 border-gray-700 text-white">
                <SelectValue placeholder="Select a material" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700 text-white">
                {materialTypes.map((material) => (
                  <SelectItem key={material} value={material}>
                    {material}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="originalWeight">Original Weight (g)</Label>
            <div className="flex space-x-2">
              <Input
                id="originalWeight"
                type="number"
                value={formData.originalWeight}
                onChange={handleInputChange}
                className="flex-1"
              />
              {weightPresets.map((weight) => (
                <Button
                  key={weight}
                  variant="secondary"
                  className="bg-gray-700 hover:bg-gray-600 text-white"
                  onClick={() => setFormData((prev) => ({ ...prev, originalWeight: weight }))}
                >
                  {weight / 1000}kg
                </Button>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="currentWeightPercentage">Current Weight (%)</Label>
            <div className="flex items-center space-x-4">
              <Slider
                id="currentWeightPercentage"
                min={0}
                max={100}
                step={1}
                value={[formData.currentWeightPercentage || 0]}
                onValueChange={handleSliderChange}
                className="flex-1"
              />
              <span className="text-white font-medium w-12 text-right">{formData.currentWeightPercentage}%</span>
            </div>
          </div>

          <div>
            <Label htmlFor="purchaseDate">Purchase Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={`w-full justify-start text-left font-normal bg-gray-900 border-gray-700 ${!formData.purchaseDate && "text-gray-400"}`}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {formData.purchaseDate ? format(formData.purchaseDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-gray-900 border-gray-700 text-white">
                <Calendar
                  mode="single"
                  selected={formData.purchaseDate}
                  onSelect={handleDateChange}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* TODO: Add Current Printer dropdown */}
        </div>
      </div>

      {/* Collapsible Print Settings */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white">Print Settings (Optional)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <Label htmlFor="nozzleTemp">Nozzle Temperature (°C)</Label>
            <Input id="nozzleTemp" type="number" value={formData.nozzleTemp} onChange={handleInputChange} placeholder="200" />
          </div>
          <div>
            <Label htmlFor="bedTemp">Bed Temperature (°C)</Label>
            <Input id="bedTemp" type="number" value={formData.bedTemp} onChange={handleInputChange} placeholder="60" />
          </div>
          <div>
            <Label htmlFor="printSpeed">Print Speed (mm/s)</Label>
            <Input id="printSpeed" type="number" value={formData.printSpeed} onChange={handleInputChange} placeholder="60" />
          </div>
        </div>
      </div>

      <div>
        <Label htmlFor="notes">Notes</Label>
        <Textarea id="notes" value={formData.notes} onChange={handleInputChange} placeholder="Any special notes about this filament..." rows={4} />
      </div>

      <div className="flex justify-end space-x-4">
        <Button type="button" variant="secondary" onClick={onCancel} className="bg-gray-700 hover:bg-gray-600 text-white">
          Cancel
        </Button>
        <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white">
          Save Filament
        </Button>
      </div>
    </form>
  );
};

export default AddEditFilamentForm;