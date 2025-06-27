import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Package, Printer, AlertTriangle } from 'lucide-react';

interface ActivityItem {
  id: string;
  type: 'added' | 'updated' | 'moved' | 'low_stock';
  description: string;
  timestamp: string;
  user?: { name: string; avatar: string };
  filament?: { name: string; icon: React.ElementType };
}

const mockActivities: ActivityItem[] = [
  {
    id: '1',
    type: 'added',
    description: 'added a new spool of Prusament PLA Galaxy Black.',
    timestamp: '2 hours ago',
    user: { name: 'John Doe', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=JD' },
    filament: { name: 'Prusament PLA Galaxy Black', icon: Package },
  },
  {
    id: '2',
    type: 'updated',
    description: 'updated current weight for Red PETG.',
    timestamp: '5 hours ago',
    user: { name: 'Jane Smith', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=JS' },
    filament: { name: 'Red PETG', icon: Printer },
  },
  {
    id: '3',
    type: 'low_stock',
    description: 'Orange ABS is running low (15% remaining).'
    ,
    timestamp: '1 day ago',
    filament: { name: 'Orange ABS', icon: AlertTriangle },
  },
  {
    id: '4',
    type: 'moved',
    description: 'moved Blue TPU from Prusa MK3S to Ender 3.',
    timestamp: '2 days ago',
    user: { name: 'John Doe', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=JD' },
    filament: { name: 'Blue TPU', icon: Printer },
  },
];

const RecentActivityFeed: React.FC = () => {
  return (
    <Card className="bg-gray-800 text-white">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {mockActivities.map((activity) => (
            <li key={activity.id} className="flex items-start space-x-3">
              <Avatar className="w-8 h-8">
                {activity.user ? (
                  <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                ) : (
                  <AvatarFallback>{activity.filament?.name.substring(0, 2)}</AvatarFallback>
                )}
              </Avatar>
              <div className="flex-1">
                <p className="text-sm">
                  {activity.user && <span className="font-semibold">{activity.user.name} </span>}
                  {activity.description}
                </p>
                <p className="text-xs text-gray-400">{activity.timestamp}</p>
              </div>
              {activity.filament?.icon && (
                <activity.filament.icon className="w-5 h-5 text-gray-500" />
              )}
            </li>
          ))}
        </ul>
        <div className="text-center mt-6">
          <a href="#" className="text-orange-500 hover:underline text-sm">View all activity</a>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivityFeed;
