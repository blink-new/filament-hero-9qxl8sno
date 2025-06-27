import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PrinterForm {
  name: string;
  status: 'active' | 'maintenance' | 'offline';
  notes: string;
}

interface AddEditPrinterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: PrinterForm) => void;
  initialData?: PrinterForm & { id?: string };
}

const AddEditPrinterModal: React.FC<AddEditPrinterModalProps> = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [formData, setFormData] = useState<PrinterForm>(initialData || {
    name: '',
    status: 'active',
    notes: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({ name: '', status: 'active', notes: '' });
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value: 'active' | 'maintenance' | 'offline') => {
    setFormData((prev) => ({ ...prev, status: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-800 text-white border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-white">{initialData?.id ? 'Edit Printer' : 'Add New Printer'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Printer Name</Label>
            <Input id="name" value={formData.name} onChange={handleChange} className="bg-gray-700 border-gray-600 text-white" required />
          </div>
          <div>
            <Label htmlFor="status">Status</Label>
            <Select value={formData.status} onValueChange={handleSelectChange}>
              <SelectTrigger id="status" className="bg-gray-700 border-gray-600 text-white">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 text-white border-gray-700">
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
                <SelectItem value="offline">Offline</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="notes">Notes</Label>
            <Textarea id="notes" value={formData.notes} onChange={handleChange} className="bg-gray-700 border-gray-600 text-white" />
          </div>
          <DialogFooter className="pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="border-gray-600 text-gray-400 hover:bg-gray-700 hover:text-white">Cancel</Button>
            <Button type="submit" className="bg-orange-500 hover:bg-orange-600">{initialData?.id ? 'Save Changes' : 'Add Printer'}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEditPrinterModal;
