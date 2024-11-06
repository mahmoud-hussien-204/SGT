import ProtectedRouter from "@/components/ProtectedRouter";

import AuthJourneyProvider from "../providers/AuthJourneyProvider";

import {Outlet} from "react-router";

import Browse from "@/components/Browse";

export const Component = () => {
  return (
    <ProtectedRouter>
      <AuthJourneyProvider>
        <header className='flex h-header-height items-center justify-between bg-neutral-bg px-1.5rem'>
          <img src='/logo.svg' alt='SGT' className='' />
          <Browse />
        </header>
        <div
          className='bg-neutral-300 py-5.25rem'
          style={{
            minHeight: "calc(100vh - 6rem)",
          }}
        >
          <Outlet />
        </div>
      </AuthJourneyProvider>
    </ProtectedRouter>
  );
};

Component.displayName = "AuthLayout";
