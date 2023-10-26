"use client";

import React from "react";
import { getProvider } from "@/lib/provider";
import { getContractInstance } from "@/lib/instance";
import ContractAddress from "@/artifacts/contract-address.json";
import SimpleStorageContract from "@/artifacts/contracts/SimpleStorage.sol/SimpleStorage.json";

export default class ProviderContainer extends React.Component {
  state = { provider: null, contract: null };
  async componentDidMount() {
    try {
      const provider = await getProvider();
      let contractDefinition = null,
        contractAddress = "";
      switch (this.props.name ? this.props.name : "") {
        case "SimpleStorage": {
          contractDefinition = SimpleStorageContract;
          contractAddress = ContractAddress.SimpleStorage;
          break;
        }
        default: {
          break;
        }
      }
      const contract =
        contractDefinition && contractAddress
          ? await getContractInstance(
              provider,
              contractAddress,
              contractDefinition
            )
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
