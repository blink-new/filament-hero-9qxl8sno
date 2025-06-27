import React from 'react';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ElementType;
  color?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon: Icon, color = 'text-orange-500' }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center justify-between">
      <div>
        <p className="text-gray-400 text-sm font-medium">{title}</p>
        <h2 className="text-3xl font-bold text-white mt-1">{value}</h2>
      </div>
      <Icon className={`w-10 h-10 ${color}`} />
    </div>
  );
};

export default MetricCard;
