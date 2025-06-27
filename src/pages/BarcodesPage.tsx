import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BarcodeGenerator from '../components/barcodes/BarcodeGenerator';
import BulkBarcodeGenerator from '@/components/barcodes/BulkBarcodeGenerator';
import BarcodeGallery from '../components/barcodes/BarcodeGallery';

// Force Vite re-evaluation

const BarcodesPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">2D Barcodes</h1>
      <Tabs defaultValue="single" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-gray-700">
          <TabsTrigger value="single">Single Barcode</TabsTrigger>
          <TabsTrigger value="bulk">Bulk Generate</TabsTrigger>
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
        </TabsList>
        <TabsContent value="single">
          <BarcodeGenerator />
        </TabsContent>
        <TabsContent value="bulk">
          <BulkBarcodeGenerator />
        </TabsContent>
        <TabsContent value="gallery">
          <BarcodeGallery />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BarcodesPage;