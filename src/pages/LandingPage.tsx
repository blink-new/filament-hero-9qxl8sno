import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-4xl space-y-8">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 animate-gradient-pulse">
          Master Your 3D Printing Filament
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Filament Hero is your ultimate companion for managing 3D printer filament inventory. Track spools, monitor usage, generate barcodes, and optimize your printing workflow with ease.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/dashboard">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button variant="outline" className="text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-white text-lg px-8 py-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105">
            Learn More
          </Button>
        </div>
      </div>

      {/* Placeholder for features section */}
      <div className="mt-20 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center space-y-4">
          <h3 className="text-2xl font-bold text-orange-400">Inventory Tracking</h3>
          <p className="text-gray-300">Keep a precise record of all your filament spools, including brand, material, color, and remaining weight.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center space-y-4">
          <h3 className="text-2xl font-bold text-orange-400">Barcode Generation</h3>
          <p className="text-gray-300">Generate and print 2D barcodes for easy identification and quick updates of your filament inventory.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center space-y-4">
          <h3 className="text-2xl font-bold text-orange-400">Printer Management</h3>
          <p className="text-gray-300">Assign filaments to your printers, track usage, and monitor the status of your 3D printing fleet.</p>
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="mt-20 text-gray-500 text-sm">
        © {new Date().getFullYear()} Filament Hero. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
