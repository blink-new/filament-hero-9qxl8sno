import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  color?: string;
}

const MetricsCard: React.FC<MetricsCardProps> = ({ title, value, icon: Icon, color }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md flex items-center justify-between">
      <div>
        <h3 className="text-gray-400 text-lg font-medium">{title}</h3>
        <p className={`text-3xl font-bold ${color || 'text-white'}`}>{value}</p>
      </div>
      <Icon className={`w-10 h-10 ${color || 'text-gray-400'}`} />
    </div>
  );
};

export default MetricsCard;
