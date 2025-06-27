import MetricsGrid from '../components/dashboard/MetricsGrid';
import RecentActivityFeed from '../components/dashboard/RecentActivityFeed';
import MaterialDistributionChart from '../components/dashboard/MaterialDistributionChart';
import LowStockAlerts from '../components/dashboard/LowStockAlerts';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Dashboard</h1>
      <MetricsGrid />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivityFeed />
        <MaterialDistributionChart />
      </div>
      <LowStockAlerts />
    </div>
  );
};

export default Dashboard;