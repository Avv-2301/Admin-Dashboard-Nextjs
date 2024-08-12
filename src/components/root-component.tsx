import React, { ReactNode } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

import {
  Bell,
  Gamepad2,
  Grid2X2,
  PackageOpen ,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  SquareTerminal,
  Users,
  Box,
} from "lucide-react";

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
          <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-muted/40 md:block">
              <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                  <Link href="/" className="flex items-center gap-2 font-semibold">
                  <Gamepad2 className="h-6 w-6"/>
                    <span className="">BiGamer</span>
                  </Link>
                </div>
                <div className="flex-1">
                  <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                    <Link
                    href={'/dashboard'}
                    className={`flex items-center gap-3 rounded-lg transition-all hover:text-primary px-3 py-2 ${pathname?.includes("dashboard") ? "bg-muted text-primary" : "text-muted-foreground"} `}
                    >
                    <Home className="h-4 w-4"/>
                    Dashboard {" "}
                    </Link>
                    <Link
                    href={'/addcategory'}
                    className={`flex items-center gap-3 rounded-lg transition-all hover:text-primary px-3 py-2 ${pathname?.includes("addcategory") ? "bg-muted text-primary" : "text-muted-foreground"} `}
                    >
                    <Grid2X2 className="h-4 w-4"/>
                    Add Category {" "}
                    </Link>
                    <Link
                    href={'/addgame'}
                    className={`flex items-center gap-3 rounded-lg transition-all hover:text-primary px-3 py-2 ${pathname?.includes("addgame") ? "bg-muted text-primary" : "text-muted-foreground"} `}
                    >
                    <PackageOpen className="h-4 w-4"/>
                    Add Game {" "}
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
              <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="shrink-0 md:hidden"
                    >
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="flex flex-col">
                    <nav className="grid gap-2 text-lg font-medium">
                    <Link
                        href="#"
                        className="flex items-center gap-2 text-lg font-semibold"
                      >
                        <Gamepad2 className="h-6 w-6" />
                        <span className="sr-only">Acme Inc</span>
                      </Link>
                      <Link
                      href={'/users'}
                      className={`flex items-center gap-3 rounded-lg transition-all hover:text-primary px-3 py-2 ${pathname?.includes("blogs") ? "bg-muted text-primary" : "text-muted-foreground"} `}
                      >
                      <Users className="h-4 w-4"/>
                      Users {" "}
                      </Link>

                      <Link
                      href={'/addcategory'}
                      className={`flex items-center gap-3 rounded-lg transition-all hover:text-primary px-3 py-2 ${pathname?.includes("addcategory") ? "bg-muted text-primary" : "text-muted-foreground"} `}
                      >
                        <Grid2X2 className="h-4 w-4"/>
                        Category{" "}
                      </Link>
                      <Link
                      href={'/addgame'}
                      className={`flex items-center gap-3 rounded-lg transition-all hover:text-primary px-3 py-2 ${pathname?.includes("addgame") ? "bg-muted text-primary" : "text-muted-foreground"} `}
                      >
                      <PackageOpen  className="h-4 w-4"/>
                      Add Game
                      </Link>
                    </nav>
                    </SheetContent>
                </Sheet>
              </header>
            </div>
          </div>
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            {children}
          </main>
        </>
      }
    </>
  )
}

export default RootLayout;
