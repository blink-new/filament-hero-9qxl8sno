import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { PlusCircle } from 'lucide-react';
import PrinterDashboard from '../components/printers/PrinterDashboard';

interface Printer {
  id: string;
  name: string;
  status: 'active' | 'maintenance' | 'offline';
  notes: string;
  color: string;
  currentFilament?: string;
}

const PrinterPage = () => {
  const [isAddEditModalOpen, setIsAddEditModalOpen] = useState(false);
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [editingPrinter, setEditingPrinter] = useState<Printer | undefined>(undefined);
  const [assigningFilamentToPrinterId, setAssigningFilamentToPrinterId] = useState<string | undefined>(undefined);

  const [printers, setPrinters] = useState<Printer[]>([
    { id: '1', name: 'Prusa MK3S', status: 'active', notes: 'Main workhorse', color: '#FF6B35', currentFilament: 'Red PLA' },
    { id: '2', name: 'Ender 3', status: 'maintenance', notes: 'Needs new hotend', color: '#0284c7' },
    { id: '3', name: 'Voron 2.4', status: 'active', notes: 'Fast printer', color: '#48BB78', currentFilament: 'Galaxy Black PETG' },
  ]);

  const handleAddPrinter = (data: Omit<Printer, 'id'>) => {
    setPrinters((prev) => [...prev, { ...data, id: String(prev.length + 1) }]);
    setIsAddEditModalOpen(false);
  };

  const handleEditPrinter = (data: Printer) => {
    setPrinters((prev) => prev.map((p) => (p.id === data.id ? data : p)));
    setIsAddEditModalOpen(false);
    setEditingPrinter(undefined);
  };

  const handleDeletePrinter = (id: string) => {
    setPrinters((prev) => prev.filter((p) => p.id !== id));
  };

  const handleAssignFilament = (printerId: string) => {
    setAssigningFilamentToPrinterId(printerId);
    setIsAssignModalOpen(true);
  };

  const handleFilamentAssignmentSubmit = (filamentId: string, printerId: string) => {
    setPrinters((prev) =>
      prev.map((p) =>
        p.id === printerId ? { ...p, currentFilament: filamentId } : p
      )
    );
    setIsAssignModalOpen(false);
    setAssigningFilamentToPrinterId(undefined);
  };

  const handleSetStatus = (id: string, status: Printer['status']) => {
    setPrinters((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status } : p))
    );
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-4">Printer Management</h1>
      <div className="flex justify-end mb-4">
        <Button onClick={() => setIsAddEditModalOpen(true)} className="bg-orange-500 hover:bg-orange-600">
          <PlusCircle className="w-5 h-5 mr-2" /> Add New Printer
        </Button>
      </div>

      <PrinterDashboard />

      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">Printers</h2>
        <div className="flex justify-end mb-4">
          <Button onClick={() => setIsAddEditModalOpen(true)} className="bg-orange-500 hover:bg-orange-600">
            <PlusCircle className="w-5 h-5 mr-2" /> Add New Printer
          </Button>
        </div>

        <PrinterGrid
          printers={printers}
          onEdit={(id) => {
            setEditingPrinter(printers.find((p) => p.id === id));
            setIsAddEditModalOpen(true);
          }}
          onDelete={handleDeletePrinter}
          onAssignFilament={handleAssignFilament}
          onSetStatus={handleSetStatus}
        />

        <AddEditPrinterModal
          isOpen={isAddEditModalOpen}
          onClose={() => {
            setIsAddEditModalOpen(false);
            setEditingPrinter(undefined);
          }}
          onSubmit={editingPrinter ? handleEditPrinter : handleAddPrinter}
          initialData={editingPrinter}
        />

        <FilamentAssignmentModal
          isOpen={isAssignModalOpen}
          onClose={() => setIsAssignModalOpen(false)}
          onSubmit={handleFilamentAssignmentSubmit}
          initialFilamentId={assigningFilamentToPrinterId}
        />
      </div>
    </div>
  );
};

export default PrinterPage;