"use client";

import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton, useUser } from "@clerk/nextjs";
import Breadcrumbs from "./Breadcrumbs";

const Header = () => {
  const { user } = useUser();
  return <div className="flex items-center justify-between p-5">
    {user && (
    <h1 className="text-2xl">
      {user?.firstName}
      {`'s`} Space
    </h1>
    )}

    {/* bread crumbs  */}
    <Breadcrumbs/>
    <div>
      <SignedOut>
        <SignInButton/>
      </SignedOut>

      <SignedIn>
        <UserButton/>
      </SignedIn>
    </div>
  </div>;
};

export default Header;
