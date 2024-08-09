import React, { ReactNode, useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";

  type RootLayoutProps = {
    children: ReactNode;
  };

  const RootLayout: React.FC<RootLayoutProps> = () => {
  return (
    <div>
        <Sheet>
            <SheetContent side='top'>
                <SheetTitle>BiGamer Dashboard</SheetTitle>
            </SheetContent>
        </Sheet>
    </div>
  )
}

export default RootLayout