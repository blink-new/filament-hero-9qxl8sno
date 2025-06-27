import FilamentForm from '../components/inventory/FilamentForm';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const EditFilamentPage = () => {
  const { id } = useParams();
  const [initialData, setInitialData] = useState<any>(null); // TODO: Define proper type

  useEffect(() => {
    // In a real app, you would fetch filament data by ID here
    console.log('Fetching filament with ID:', id);
    // Mock data for now
    setInitialData({
      id: id,
      spoolName: 'Mock Filament ' + id,
      photoUrl: 'https://source.unsplash.com/random/300x300?filament,edit',
      brand: 'MockBrand',
      material: 'PLA',
      color: 'MockColor',
      remaining: 50,
      inUse: false,
      lowStock: false,
      purchaseDate: '2023-01-15',
      nozzleTemp: 200,
      bedTemp: 60,
      printSpeed: 60,
      notes: 'This is a mock filament for editing.',
    });
  }, [id]);

  const handleSubmit = (formData: any) => {
    console.log('Updating filament:', id, formData);
    // Implement actual update logic here
  };

  if (!initialData) {
    return <div className="text-white">Loading filament data...</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Edit Filament: {initialData.spoolName}</h1>
      <FilamentForm onSubmit={handleSubmit} initialData={initialData} />
    </div>
  );
};

export default EditFilamentPage;
