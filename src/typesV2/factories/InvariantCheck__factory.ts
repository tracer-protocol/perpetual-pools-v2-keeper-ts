/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  InvariantCheck,
  InvariantCheckInterface,
} from "../InvariantCheck";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "InvariantsFail",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "InvariantsHold",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "poolToCheck",
        type: "address",
      },
    ],
    name: "checkInvariants",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "poolFactory",
    outputs: [
      {
        internalType: "contract IPoolFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161079838038061079883398101604081905261002f9161009e565b6001600160a01b0381166100895760405162461bcd60e51b815260206004820152601e60248201527f466163746f727920616464726573732063616e6e6f74206265206e756c6c0000604482015260640160405180910390fd5b60601b6001600160601b0319166080526100ce565b6000602082840312156100b057600080fd5b81516001600160a01b03811681146100c757600080fd5b9392505050565b60805160601c6106a76100f1600039600081816040015260b401526106a76000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80634219dc401461003b5780639e079fc41461007e575b600080fd5b6100627f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b61009161008c3660046105b7565b610093565b005b604051635ab78ee160e01b81526001600160a01b03808316600483015282917f000000000000000000000000000000000000000000000000000000000000000090911690635ab78ee19060240160206040518083038186803b1580156100f857600080fd5b505afa15801561010c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061013091906105f8565b6101725760405162461bcd60e51b815260206004820152600f60248201526e141bdbdb081a5cc81a5b9d985b1a59608a1b604482015260640160405180910390fd5b6000816001600160a01b031663cd39f30f6040518163ffffffff1660e01b815260040160206040518083038186803b1580156101ad57600080fd5b505afa1580156101c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e591906105db565b90506000826001600160a01b0316637b9e618d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561022257600080fd5b505afa158015610236573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061025a91906105db565b6040516370a0823160e01b81526001600160a01b03868116600483015291909116906370a082319060240160206040518083038186803b15801561029d57600080fd5b505afa1580156102b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d5919061061a565b90506000826001600160a01b031663ce6609166040518163ffffffff1660e01b815260040160206040518083038186803b15801561031257600080fd5b505afa158015610326573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034a919061061a565b90506000846001600160a01b0316637e71fc7d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561038757600080fd5b505afa15801561039b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103bf919061061a565b90506000856001600160a01b031663ba8d54686040518163ffffffff1660e01b815260040160206040518083038186803b1580156103fc57600080fd5b505afa158015610410573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610434919061061a565b9050610442848484846104ea565b6104b857610450878661050d565b7f32917bd2c7c894d384362f4fd6cb06a49869aaa5b63611e87c07f6b8adcd27676040516104af9060208082526017908201527f42616c616e636520696e76617269616e74206661696c73000000000000000000604082015260600190565b60405180910390a15b6040517f27b8a8fe1796821b48ac809f0032cf0def9eeff87ffe3c46c5bb7b323d50836f90600090a150505050505050565b6000816104f78486610633565b6105019190610633565b90941015949350505050565b816001600160a01b0316638456cb596040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561054857600080fd5b505af115801561055c573d6000803e3d6000fd5b50505050806001600160a01b0316638456cb596040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561059b57600080fd5b505af11580156105af573d6000803e3d6000fd5b505050505050565b6000602082840312156105c957600080fd5b81356105d481610659565b9392505050565b6000602082840312156105ed57600080fd5b81516105d481610659565b60006020828403121561060a57600080fd5b815180151581146105d457600080fd5b60006020828403121561062c57600080fd5b5051919050565b6000821982111561065457634e487b7160e01b600052601160045260246000fd5b500190565b6001600160a01b038116811461066e57600080fd5b5056fea264697066735822122089a84421a567cb39c6153c8b142790d6c8227315a0741dd9178800fbe5b4d87464736f6c63430008070033";

export class InvariantCheck__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _factory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<InvariantCheck> {
    return super.deploy(_factory, overrides || {}) as Promise<InvariantCheck>;
  }
  getDeployTransaction(
    _factory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_factory, overrides || {});
  }
  attach(address: string): InvariantCheck {
    return super.attach(address) as InvariantCheck;
  }
  connect(signer: Signer): InvariantCheck__factory {
    return super.connect(signer) as InvariantCheck__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InvariantCheckInterface {
    return new utils.Interface(_abi) as InvariantCheckInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InvariantCheck {
    return new Contract(address, _abi, signerOrProvider) as InvariantCheck;
  }
}
