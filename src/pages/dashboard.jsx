import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const dashboard = () => {
  return (
    <div>
        <div className='flex flex-row items-center justify-between space-y-2'>
            <p className='text-3xl font-bold tracking-tight'>Dashboard</p>
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