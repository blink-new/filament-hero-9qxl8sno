import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Download } from 'lucide-react';

interface BarcodeItem {
  id: string;
  spoolName: string;
  brand: string;
  materialType: string;
  qrCodeUrl: string;
}

const mockBarcodes: BarcodeItem[] = [
  { id: '1', spoolName: 'Red PLA', brand: 'Prusament', materialType: 'PLA', qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Red%20PLA%20(Prusament)' },
  { id: '2', spoolName: 'Galaxy Black PETG', brand: 'Prusament', materialType: 'PETG', qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Galaxy%20Black%20PETG%20(Prusament)' },
  { id: '3', spoolName: 'Orange ABS', brand: 'Hatchbox', materialType: 'ABS', qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Orange%20ABS%20(Hatchbox)' },
  { id: '4', spoolName: 'Blue TPU', brand: 'FilamentOne', materialType: 'TPU', qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Blue%20TPU%20(FilamentOne)' },
];

const BarcodeGallery: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBarcodes = mockBarcodes.filter(barcode =>
    barcode.spoolName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    barcode.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    barcode.materialType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDownload = (url: string, name: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `${name}-qrcode.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card className="bg-gray-800 text-white">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Barcode Gallery</CardTitle>
        <div className="relative mt-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            placeholder="Search barcodes..."
            className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent>
        {filteredBarcodes.length === 0 ? (
          <p className="text-gray-400 text-center">No barcodes found matching your search.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredBarcodes.map(barcode => (
              <div key={barcode.id} className="bg-gray-700 rounded-lg p-4 flex flex-col items-center space-y-2">
                <img src={barcode.qrCodeUrl} alt={`${barcode.spoolName} QR Code`} className="w-32 h-32" />
                <p className="text-sm font-semibold text-white text-center">{barcode.spoolName}</p>
                <p className="text-xs text-gray-400 text-center">{barcode.brand} - {barcode.materialType}</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDownload(barcode.qrCodeUrl, barcode.spoolName)}
                  className="w-full mt-2 border-gray-600 text-gray-400 hover:bg-gray-600 hover:text-white"
                >
                  <Download className="w-4 h-4 mr-2" /> Download
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BarcodeGallery;
