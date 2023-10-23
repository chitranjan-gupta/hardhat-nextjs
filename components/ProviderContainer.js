"use client";

import React from "react";
import { getProvider } from "@/lib/provider";
import { getContractInstance } from "@/lib/instance";
import SimpleStorageContract from "@/artifacts/contracts/SimpleStorage.sol/SimpleStorage.json";

export default class ProviderContainer extends React.Component {
  state = { provider: null, contract: null };
  async componentDidMount() {
    try {
      const provider = await getProvider();
      let contractDefinition = null;
      switch (this.props.name ? this.props.name : "") {
        case "SimpleStorage": {
          contractDefinition = SimpleStorageContract;
          break;
        }
        default: {
          break;
        }
      }
      const contract = contractDefinition
        ? await getContractInstance(provider, contractDefinition)
        : null;
      this.setState({ provider, contract });
    } catch (err) {
      console.error(err);
    }
  }
  render() {
    const { provider, contract } = this.state;
    return provider
      ? this.props.render({ provider, contract })
      : this.props.renderLoading();
  }
}
