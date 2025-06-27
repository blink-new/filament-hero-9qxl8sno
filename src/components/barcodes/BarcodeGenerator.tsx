import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { QRCodeSVG } from 'qrcode.react';
import { Download, Printer } from 'lucide-react';

const BarcodeGenerator: React.FC = () => {
  const user = useUser();
  const [filamentId, setFilamentId] = useState<string>('');
  const [spoolName, setSpoolName] = useState<string>('');
  const [barcodeSize, setBarcodeSize] = useState<number>(128);

  // Mock filament data for the dropdown
  const mockFilaments = user.name === 'Test user' ? [
    { id: '1', name: 'PLA Red' },
    { id: '2', name: 'PETG Blue' },
    { id: '3', name: 'ABS Green' },
  ] : [];

  const handleDownload = () => {
    const svgElement = document.getElementById("barcode-svg");
    if (svgElement) {
      const svgData = new XMLSerializer().serializeToString(svgElement);
      const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(svgBlob);

      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0);
        const pngFile = canvas.toDataURL("image/png");

        const downloadLink = document.createElement("a");
        downloadLink.href = pngFile;
        downloadLink.download = `${spoolName || 'barcode'}.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(url);
      };
      img.src = url;
    }
  };

  const handlePrint = () => {
    const printContent = document.getElementById("barcode-to-print");
    if (printContent) {
      const originalContents = document.body.innerHTML;
      document.body.innerHTML = printContent.innerHTML;
      window.print();
      document.body.innerHTML = originalContents;
      window.location.reload(); // Reload to restore original page state
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg space-y-6">
      <h2 className="text-xl font-semibold text-white">Single Barcode Generator</h2>

      <div>
        <Label htmlFor="filamentSelect">Select Filament</Label>
        <Select onValueChange={(value) => {
          setFilamentId(value);
          const selectedFil = mockFilaments.find(f => f.id === value);
          setSpoolName(selectedFil ? selectedFil.name : '');
        }}>
          <SelectTrigger className="mt-1 w-full bg-gray-700 border-gray-600 text-white">
            <SelectValue placeholder="Select a filament" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 text-white border-gray-700">
            {mockFilaments.map(filament => (
              <SelectItem key={filament.id} value={filament.id}>
                {filament.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="spoolNameInput">Spool Name (for barcode data)</Label>
        <Input
          id="spoolNameInput"
          value={spoolName}
          onChange={(e) => setSpoolName(e.target.value)}
          placeholder="Enter spool name"
          className="mt-1 bg-gray-700 border-gray-600 text-white"
        />
      </div>

      <div>
        <Label htmlFor="barcodeSize">Barcode Size (px)</Label>
        <Select onValueChange={(value) => setBarcodeSize(Number(value))} value={String(barcodeSize)}>
          <SelectTrigger className="mt-1 w-full bg-gray-700 border-gray-600 text-white">
            <SelectValue placeholder="Select size" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 text-white border-gray-700">
            <SelectItem value="64">64px</SelectItem>
            <SelectItem value="128">128px</SelectItem>
            <SelectItem value="256">256px</SelectItem>
            <SelectItem value="512">512px</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {spoolName && (
        <div className="flex flex-col items-center space-y-4 p-4 border border-gray-700 rounded-lg">
          <p className="text-white text-lg font-semibold">{spoolName}</p>
          <div id="barcode-svg">
            <QRCodeSVG value={spoolName} size={barcodeSize} level="H" fgColor="#FFFFFF" bgColor="#1A202C" />
          </div>
          <div className="flex space-x-4">
            <Button onClick={handleDownload} className="bg-orange-500 hover:bg-orange-600 text-white">
              <Download className="mr-2 h-4 w-4" /> Download PNG
            </Button>
            <Button onClick={handlePrint} variant="outline" className="bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600">
              <Printer className="mr-2 h-4 w-4" /> Print Label
            </Button>
          </div>
        </div>
      )}

      {/* Hidden div for printing */}
      <div id="barcode-to-print" className="hidden">
        <div style={{ padding: '10mm', textAlign: 'center', color: 'black', backgroundColor: 'white' }}>
          <p style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5mm' }}>{spoolName}</p>
          <QRCodeSVG value={spoolName} size={256} level="H" fgColor="#000000" bgColor="#FFFFFF" />
        </div>
      </div>
    </div>
  );
};

export default BarcodeGenerator;