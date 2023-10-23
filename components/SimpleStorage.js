"use client";

import React from "react";
import Link from "next/link";

export default class SimpleStorage extends React.Component {
  state = {
    balance: undefined,
    ethBalance: undefined,
    value: 0,
  };
  storeValue = async () => {
    console.log("Calling set function with the input value of the contract");
    const { contract } = this.props;
    const value = parseInt(this.state.value);
    await contract.set(value);
    console.log(`Stored value: ${value} into the contract`);
  };
  getValue = async () => {
    console.log("Calling get function to get the stored value on the contract");
    const { contract } = this.props;
    const response = await contract.get();
    console.log(`Fetched value: ${response} from the contract`);
    this.setState({ balance: response.toString() });
  };
  render() {
    const { balance = "N/A" } = this.state;
    return (
      <>
        <div className="flex flex-col p-3">
          <input
            onChange={(event) => this.setState({ value: event.target.value })}
            type="text"
            placeholder="Input the value to store"
          />
          <div className="" onClick={this.storeValue}>
            Set
          </div>
          <div onClick={this.getValue}>Get</div>
          <div>Contract balance: {balance}</div>
          <div>
            <Link href="/account">My Accounts</Link>
          </div>
          <div>
            <Link href="/">Home</Link>
          </div>
        </div>
      </>
    );
  }
}
