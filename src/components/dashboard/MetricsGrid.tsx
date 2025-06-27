import React from 'react';
import MetricsCard from './MetricsCard';
import { Package, Printer, AlertTriangle, TrendingUp } from 'lucide-react';

const MetricsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricsCard title="Total Spools" value="125" icon={Package} />
      <MetricsCard title="In Use" value="12" icon={Printer} />
      <MetricsCard title="Low Stock" value="3" icon={AlertTriangle} color="text-red-500" />
      <MetricsCard title="This Month" value="+5%" icon={TrendingUp} />
    </div>
  );
};

export default MetricsGrid;