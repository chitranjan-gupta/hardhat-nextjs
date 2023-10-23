import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div>DApps: </div>
      <div>
        <Link href="/account">My Account</Link>
        <br/>
        <Link href="/simplestorage">Simple Storage</Link>
      </div>
    </>
  );
}
