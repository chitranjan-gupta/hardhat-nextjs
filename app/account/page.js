"use client";

import React from "react";
import ProviderContainer from "@/components/ProviderContainer";
import Account from "@/components/Account";

export default function Page() {
  return (
    <ProviderContainer
      renderLoading={() => <div>Loading Decentralized Application Page...</div>}
      render={({ provider }) => <Account provider={provider} />}
    />
  );
}
