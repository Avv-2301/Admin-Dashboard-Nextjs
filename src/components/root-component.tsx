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
        
        </>
      }
    </>
  )
}

export default RootLayout;
