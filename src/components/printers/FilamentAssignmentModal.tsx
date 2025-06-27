import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Filament {
  id: string;
  spoolName: string;
  brand: string;
}

interface Printer {
  id: string;
  name: string;
}

const mockFilaments: Filament[] = [
  { id: '1', spoolName: 'Red PLA', brand: 'Prusament' },
  { id: '2', spoolName: 'Galaxy Black PETG', brand: 'Prusament' },
  { id: '3', spoolName: 'Orange ABS', brand: 'Hatchbox' },
];

const mockPrinters: Printer[] = [
  { id: 'p1', name: 'Prusa MK3S' },
  { id: 'p2', name: 'Ender 3' },
  { id: 'p3', name: 'Anycubic Mega S' },
];

interface FilamentAssignmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (filamentId: string, printerId: string) => void;
  initialFilamentId?: string;
}

const FilamentAssignmentModal: React.FC<FilamentAssignmentModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialFilamentId,
}) => {
  const [selectedFilament, setSelectedFilament] = useState<string>(initialFilamentId || '');
  const [selectedPrinter, setSelectedPrinter] = useState<string>('');

  useEffect(() => {
    if (initialFilamentId) {
      setSelectedFilament(initialFilamentId);
    }
  }, [initialFilamentId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedFilament && selectedPrinter) {
      onSubmit(selectedFilament, selectedPrinter);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-800 text-white border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-white">Assign Filament to Printer</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="filament-select">Filament</Label>
            <Select value={selectedFilament} onValueChange={setSelectedFilament} disabled={!!initialFilamentId}>
              <SelectTrigger id="filament-select" className="bg-gray-700 border-gray-600 text-white">
                <SelectValue placeholder="Select a filament" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 text-white border-gray-700">
                {mockFilaments.map((filament) => (
                  <SelectItem key={filament.id} value={filament.id}>
                    {filament.spoolName} ({filament.brand})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="printer-select">Printer</Label>
            <Select value={selectedPrinter} onValueChange={setSelectedPrinter}>
              <SelectTrigger id="printer-select" className="bg-gray-700 border-gray-600 text-white">
                <SelectValue placeholder="Select a printer" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 text-white border-gray-700">
                {mockPrinters.map((printer) => (
                  <SelectItem key={printer.id} value={printer.id}>
                    {printer.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <DialogFooter className="pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="border-gray-600 text-gray-400 hover:bg-gray-700 hover:text-white">Cancel</Button>
            <Button type="submit" className="bg-orange-500 hover:bg-orange-600" disabled={!selectedFilament || !selectedPrinter}>Assign</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FilamentAssignmentModal;
