import React, { ReactNode } from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { useRouter } from "next/router";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {

  const router = useRouter();
  const { pathname } = router;
  return (
    <>
      {pathname === "/login" ? <div className="grid min-h-screen w-full">{children}</div> :
        <>
        
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                {children}
          </main>
        </>
      }
    </>
  )
}

export default RootLayout;
