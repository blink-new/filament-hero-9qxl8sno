import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface BillingRecord {
  id: string;
  date: string;
  plan: string;
  amount: string;
  status: string;
}

const mockBillingHistory: BillingRecord[] = [
  { id: '1', date: '2023-05-01', plan: 'Pro Plan', amount: '$19.99', status: 'Paid' },
  { id: '2', date: '2023-04-01', plan: 'Pro Plan', amount: '$19.99', status: 'Paid' },
  { id: '3', date: '2023-03-01', plan: 'Free Plan', amount: '$0.00', status: 'N/A' },
];

const SubscriptionSettings: React.FC = () => {
  return (
    <Card className="bg-gray-800 text-white">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Subscription</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <p className="text-lg font-semibold">Current Plan: <span className="text-orange-500">Free Plan</span></p>
          <p className="text-gray-400 text-sm">You are currently on the free tier. Upgrade for more features!</p>
          <p className="text-gray-400 text-sm">Usage: 5/20 spools used</p>
        </div>

        <div className="flex space-x-4">
          <Button className="bg-orange-500 hover:bg-orange-600">Upgrade Plan</Button>
          <Button variant="outline" className="border-gray-600 text-gray-400 hover:bg-gray-700 hover:text-white">Manage Billing</Button>
        </div>

        <div className="space-y-4 border-t border-gray-700 pt-6">
          <h3 className="text-lg font-semibold text-white">Billing History</h3>
          {mockBillingHistory.length === 0 ? (
            <p className="text-gray-400">No billing history found.</p>
          ) : (
            <div className="rounded-md border bg-gray-700 border-gray-600">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-gray-600">
                    <TableHead>Date</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockBillingHistory.map((record) => (
                    <TableRow key={record.id} className="hover:bg-gray-600">
                      <TableCell>{record.date}</TableCell>
                      <TableCell>{record.plan}</TableCell>
                      <TableCell>{record.amount}</TableCell>
                      <TableCell className="text-right">{record.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SubscriptionSettings;
