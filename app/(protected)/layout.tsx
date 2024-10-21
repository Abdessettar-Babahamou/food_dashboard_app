"use client";
import CartPaymentModel from "@/components/cart-payment-model";
import CartModel from "@/components/cart_model";
import SideBar from "@/components/side-bar";
import { SideBarProvider } from "@/context/side-bar-context";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  return (
    <div className="flex flex-col ">
      {/* NavBar */}
      <SideBarProvider>
        <div className="flex">
          <SideBar />
          <main
            className={cn(
              `flex-1 p-4 lg:p-8 lg:ml-[100px]  overflow-x-hidden  min-h-screen`,
              {
                "xl:mr-[470px]": pathName == "/home",
              }
            )}
          >
            {/* <NavBar /> */}

            {children}
          </main>
          {/* cardModel */}
          {pathName == "/home" && (
            <>
              <CartModel />
              <CartPaymentModel />
            </>
          )}
        </div>
      </SideBarProvider>
    </div>
  );
}

export default Layout;
