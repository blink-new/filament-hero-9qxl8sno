import React from 'react';
import { History, Package, Printer, User } from 'lucide-react';

interface ActivityItemProps {
  icon: React.ElementType;
  description: string;
  timestamp: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ icon: Icon, description, timestamp }) => (
  <div className="flex items-center space-x-3">
    <div className="p-2 rounded-full bg-gray-700 text-gray-300">
      <Icon size={20} />
    </div>
    <div className="flex-1">
      <p className="text-gray-200 text-sm">{description}</p>
      <p className="text-gray-500 text-xs">{timestamp}</p>
    </div>
  </div>
);

const RecentActivity: React.FC = () => {
  const mockActivities = [
    { icon: Package, description: "Added new filament: PLA Red", timestamp: "2 hours ago" },
    { icon: Printer, description: "Assigned PLA Blue to Ender 3", timestamp: "Yesterday" },
    { icon: User, description: "Updated profile picture", timestamp: "3 days ago" },
    { icon: Package, description: "Updated weight for ABS Black", timestamp: "1 week ago" },
  ];

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
        <History className="mr-2" size={20} /> Recent Activity
      </h2>
      <div className="space-y-4">
        {mockActivities.map((activity, index) => (
          <ActivityItem key={index} {...activity} />
        ))}
      </div>
      <div className="text-right mt-4">
        <a href="#" className="text-orange-500 hover:underline text-sm">
          View all
        </a>
      </div>
    </div>
  );
};

export default RecentActivity;
