import FilamentForm from '../components/inventory/FilamentForm';

const AddFilamentPage = () => {
  const handleSubmit = (formData: any) => {
    console.log('Adding new filament:', formData);
    // Implement actual add logic here
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Add New Filament</h1>
      <FilamentForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddFilamentPage;
