import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from "lucide-react";

const dashboard = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <Tabs defaultValue="account" className="space-y-4 mb-4">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className='flex flex-row justify-between mt-4'>
            <Card>
              <CardHeader className="flex flex-row items-center space-y-0 pb-2 gap-4">
                <CardTitle className="text-lg font-medium">
                  Total Users
                </CardTitle>
                <User className="ml-2 h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">50</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center space-y-0 pb-2 gap-4">
                <CardTitle className="text-lg font-medium">
                  Total Users
                </CardTitle>
                <User className="ml-2 h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">50</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center space-y-0 pb-2 gap-4">
                <CardTitle className="text-lg font-medium">
                  Total Users
                </CardTitle>
                <User className="ml-2 h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">50</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center space-y-0 pb-2 gap-4">
                <CardTitle className="text-lg font-medium">
                  Total Users
                </CardTitle>
                <User className="ml-2 h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">50</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="password">Set A Password</TabsContent>
      </Tabs>
    </div>
  );
};

export default dashboard;
