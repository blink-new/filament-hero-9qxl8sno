import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const DataManagementSettings: React.FC = () => {
  return (
    <Card className="bg-gray-800 text-white">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Data Management</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Export Data</h3>
          <p className="text-gray-400 text-sm">Download all your filament data as a CSV file.</p>
          <Button className="bg-orange-500 hover:bg-orange-600">Export to CSV</Button>
        </div>

        <div className="space-y-4 border-t border-gray-700 pt-6">
          <h3 className="text-lg font-semibold text-white">Import Data</h3>
          <p className="text-gray-400 text-sm">Upload a CSV file to import filament data.</p>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="data-file">Data File (CSV)</Label>
            <Input id="data-file" type="file" className="bg-gray-700 border-gray-600 text-white file:text-white file:bg-gray-600 hover:file:bg-gray-500" />
          </div>
          <Button variant="outline" className="border-gray-600 text-gray-400 hover:bg-gray-700 hover:text-white">Import Data</Button>
        </div>

        <div className="space-y-4 border-t border-gray-700 pt-6">
          <h3 className="text-lg font-semibold text-white">Backup & Restore</h3>
          <p className="text-gray-400 text-sm">Manage automatic backups or restore from a previous backup.</p>
          <Button variant="outline" className="border-gray-600 text-gray-400 hover:bg-gray-700 hover:text-white">Create Backup</Button>
          <Button variant="outline" className="border-gray-600 text-gray-400 hover:bg-gray-700 hover:text-white">Restore from Backup</Button>
        </div>

        <div className="space-y-4 border-t border-gray-700 pt-6">
          <h3 className="text-lg font-semibold text-red-500">Delete All Data</h3>
          <p className="text-gray-400 text-sm">Permanently delete all your filament data. This action cannot be undone.</p>
          <Button variant="destructive">Delete All Data</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataManagementSettings;
