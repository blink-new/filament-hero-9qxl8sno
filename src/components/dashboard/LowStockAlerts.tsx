import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle } from 'lucide-react';

interface LowStockItem {
  id: string;
  name: string;
  material: string;
  remaining: number;
}

const mockLowStockData: LowStockItem[] = [
  { id: 'ls1', name: 'Orange ABS', material: 'ABS', remaining: 15 },
  { id: 'ls2', name: 'Green PETG', material: 'PETG', remaining: 22 },
  { id: 'ls3', name: 'White PLA', material: 'PLA', remaining: 10 },
];

const LowStockAlerts: React.FC = () => {
  return (
    <Card className="bg-gray-800 text-white">
      <CardHeader>
        <CardTitle className="text-xl font-bold flex items-center">
          <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
          Low Stock Alerts
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockLowStockData.length === 0 ? (
          <p className="text-gray-400">No low stock alerts at the moment. Great job!</p>
        ) : (
          mockLowStockData.map((item) => (
            <div key={item.id} className="flex items-center space-x-4">
              <div className="flex-1">
                <p className="font-semibold">{item.name} ({item.material})</p>
                <Progress value={item.remaining} className="w-full h-2 mt-1" indicatorClassName={item.remaining < 10 ? "bg-red-500" : "bg-yellow-500"} />
                <span className="text-sm text-gray-400">{item.remaining}% remaining</span>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">Reorder</Button>
                <Button variant="secondary" size="sm">Update</Button>
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
};

export default LowStockAlerts;