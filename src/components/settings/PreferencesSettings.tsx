import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const PreferencesSettings: React.FC = () => {
  const [lowStockThreshold, setLowStockThreshold] = React.useState([25]);

  return (
    <Card className="bg-gray-800 text-white">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Preferences</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label htmlFor="units">Default Units</Label>
          <Select defaultValue="metric">
            <SelectTrigger id="units" className="bg-gray-700 border-gray-600 text-white">
              <SelectValue placeholder="Select units" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 text-white border-gray-700">
              <SelectItem value="metric">Metric (grams, mm)</SelectItem>
              <SelectItem value="imperial">Imperial (ounces, inches)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="lowStockThreshold">Low Stock Threshold ({lowStockThreshold[0]}%)</Label>
          <Slider
            id="lowStockThreshold"
            min={0}
            max={50}
            step={5}
            value={lowStockThreshold}
            onValueChange={setLowStockThreshold}
            className="w-full"
            indicatorColor="bg-orange-500"
          />
        </div>

        <div>
          <Label>Default View</Label>
          <Select defaultValue="grid">
            <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
              <SelectValue placeholder="Select default view" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 text-white border-gray-700">
              <SelectItem value="grid">Grid View</SelectItem>
              <SelectItem value="list">List View</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4 border-t border-gray-700 pt-6">
          <h3 className="text-lg font-semibold text-white">Notification Settings</h3>
          <div className="flex items-center justify-between">
            <Label htmlFor="emailNotifications">Email Notifications</Label>
            <Switch id="emailNotifications" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="pushNotifications">Push Notifications</Label>
            <Switch id="pushNotifications" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="lowStockAlerts">Low Stock Alerts</Label>
            <Switch id="lowStockAlerts" defaultChecked />
          </div>
        </div>

        <div className="flex justify-end">
          <Button className="bg-orange-500 hover:bg-orange-600">Save Preferences</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PreferencesSettings;
