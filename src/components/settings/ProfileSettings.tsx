import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileSettings: React.FC = () => {
  return (
    <Card className="bg-gray-800 text-white">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center space-x-4">
          <Avatar className="w-20 h-20">
            <AvatarImage src="https://api.dicebear.com/7.x/initials/svg?seed=JD" alt="User Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Button variant="outline" className="border-gray-600 text-gray-400 hover:bg-gray-700 hover:text-white">
            Change Avatar
          </Button>
        </div>

        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" defaultValue="John Doe" className="bg-gray-700 border-gray-600 text-white" />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" defaultValue="john.doe@example.com" className="bg-gray-700 border-gray-600 text-gray-400" disabled />
        </div>

        <div className="space-y-4 border-t border-gray-700 pt-6">
          <h3 className="text-lg font-semibold text-white">Change Password</h3>
          <div>
            <Label htmlFor="currentPassword">Current Password</Label>
            <Input id="currentPassword" type="password" className="bg-gray-700 border-gray-600 text-white" />
          </div>
          <div>
            <Label htmlFor="newPassword">New Password</Label>
            <Input id="newPassword" type="password" className="bg-gray-700 border-gray-600 text-white" />
          </div>
          <div>
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input id="confirmPassword" type="password" className="bg-gray-700 border-gray-600 text-white" />
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600">Update Password</Button>
        </div>

        <div className="space-y-4 border-t border-gray-700 pt-6">
          <h3 className="text-lg font-semibold text-red-500">Account Deletion</h3>
          <p className="text-gray-400 text-sm">Permanently delete your account and all associated data. This action cannot be undone.</p>
          <Button variant="destructive">Delete Account</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileSettings;
