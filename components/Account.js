"use client";

import React, { useState } from "react";
import Link from "next/link";
import { formatEther } from "ethers";

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
      <div>
        <Link href="/">Home</Link>
      </div>
    </>
  );
}
