import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const dashboard = () => {
  return (
    <div>
        <div className='flex flex-row items-center justify-between space-y-2'>
            <h2 className='text-2xl font-bold tracking-tight'>Dashboard</h2>
        </div>
        <Tabs defaultValue='account' className='w-[500px]'>
            <TabsList >
                <TabsTrigger value='account'>Account</TabsTrigger>
                <TabsTrigger value='password'>Password</TabsTrigger>
            </TabsList>
            <TabsContent value='account'>Make Changes here</TabsContent>
            <TabsContent value='password'>Set A Password</TabsContent>
        </Tabs>
    </div>
  )
}

export default dashboard