import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { useUser } from '@/context/UserContext';

interface PrinterUsageData {
  name: string;
  usage: number;
}

const PrinterDashboard: React.FC = () => {
  const user = useUser();
  const mockPrinterUsage: PrinterUsageData[] = user.name === 'Test user' ? [
    { name: 'Prusa MK3S', usage: 75 },
    { name: 'Ender 3', usage: 50 },
    { name: 'Anycubic Mega S', usage: 90 },
    { name: 'Creality CR-10', usage: 30 },
  ] : [];
  const mockPrinterStatus = user.name === 'Test user' ? [
    { name: 'Active', value: 2, color: '#48BB78' },
    { name: 'Maintenance', value: 1, color: '#F6E05E' },
    { name: 'Offline', value: 1, color: '#F56565' },
  ] : [];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Printer Overview</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gray-800 text-white">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Printer Usage</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockPrinterUsage} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
                <XAxis dataKey="name" stroke="#A0AEC0" />
                <YAxis stroke="#A0AEC0" />
                <Tooltip contentStyle={{ backgroundColor: '#2D3748', border: 'none' }} itemStyle={{ color: '#FFFFFF' }} />
                <Bar dataKey="usage" fill="#FF6B35" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 text-white">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Printer Status Distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mockPrinterStatus}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  dataKey="value"
                >
                  {mockPrinterStatus.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#2D3748', border: 'none' }} itemStyle={{ color: '#FFFFFF' }} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gray-800 text-white">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Maintenance Reminders</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400">No upcoming maintenance reminders.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrinterDashboard;