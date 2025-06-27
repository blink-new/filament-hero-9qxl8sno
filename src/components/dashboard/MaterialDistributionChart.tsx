import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MaterialData {
  name: string;
  value: number;
}

const mockMaterialData: MaterialData[] = [
  { name: 'PLA', value: 400 },
  { name: 'PETG', value: 300 },
  { name: 'ABS', value: 200 },
  { name: 'TPU', value: 100 },
  { name: 'Other', value: 50 },
];

const COLORS = ['#FF6B35', '#0284c7', '#48BB78', '#F6E05E', '#ED8936'];

const MaterialDistributionChart: React.FC = () => {
  return (
    <Card className="bg-gray-800 text-white">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Material Distribution</CardTitle>
      </CardHeader>
      <CardContent className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={mockMaterialData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {mockMaterialData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: '#2D3748', border: 'none' }} itemStyle={{ color: '#FFFFFF' }} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default MaterialDistributionChart;
