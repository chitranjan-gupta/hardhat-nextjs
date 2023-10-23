"use client";

import React from "react";
import ProviderContainer from "@/components/ProviderContainer";
import SimpleStorage from "@/components/SimpleStorage";

export default function Page() {
  return (
    <ProviderContainer
      renderLoading={() => <div>Loading Decentralized Application Page...</div>}
      render={({ provider, contract }) => (
        <SimpleStorage contract={contract} provider={provider} />
      )}
      name="SimpleStorage"
    />
  );
}
