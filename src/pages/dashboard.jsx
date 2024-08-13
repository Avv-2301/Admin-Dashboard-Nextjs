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
import {
  CalendarClock,
  Keyboard,
  NotebookText,
  Users,
  CalendarIcon,
} from "lucide-react";

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
        <TabsContent value="account" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Users
                </CardTitle>
                <Users className="ml-2 h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">50</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Prompts
                </CardTitle>
                <Keyboard className="ml-2 h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">50</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Blogs
                </CardTitle>
                <NotebookText className="ml-2 h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">50</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Today Registered
                </CardTitle>
                <CalendarClock className="ml-2 h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  50
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>No Of Prompts</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                {/* <Overview/> */}
              </CardContent>
            </Card>
            <Card className="col-span-6 md:col-span-3 h-[460px] lg:h-[460px] md:h-[230px] overflow-y-auto">
              <CardHeader>
                <CardTitle>Recent Prompts</CardTitle>
              </CardHeader>
              <CardContent>
                {/* <RecentSales/> */}
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
