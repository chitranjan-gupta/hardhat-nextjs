"use client";

import { formatEther } from "ethers";
import React, { useState } from "react";

export default function Account({ provider }) {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("0");
  async function getAddress() {
    setAddress(await (await provider.getSigner(0)).getAddress());
  }
  async function getBalance() {
    setBalance(formatEther(await provider.getBalance(address)));
  }
  return (
    <>
      <div>
        <button onClick={getAddress}>Get Address: </button>
        <label>{address}</label>
      </div>
      <div>
        <button onClick={getBalance}>Get Balance: </button>
        <label>{balance} ETH</label>
      </div>
    </>
  );
}
