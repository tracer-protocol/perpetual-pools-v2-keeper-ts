/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ChainlinkOracleWrapper,
  ChainlinkOracleWrapperInterface,
} from "../ChainlinkOracleWrapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_oracle",
        type: "address",
      },
      {
        internalType: "address",
        name: "_deployer",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "deployer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "wad",
        type: "int256",
      },
    ],
    name: "fromWad",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPrice",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPriceAndMetadata",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oracle",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poll",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "scaler",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161076438038061076483398101604081905261002f91610203565b6001600160a01b03821661008a5760405162461bcd60e51b815260206004820152601a60248201527f4f7261636c652063616e6e6f742062652030206164647265737300000000000060448201526064015b60405180910390fd5b6001600160a01b0381166100e05760405162461bcd60e51b815260206004820152601c60248201527f4465706c6f7965722063616e6e6f7420626520302061646472657373000000006044820152606401610081565b600080546001600160a01b0319166001600160a01b0384169081178255606083901b6001600160601b0319166080526040805163313ce56760e01b8152905163313ce56791600480820192602092909190829003018186803b15801561014557600080fd5b505afa158015610159573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061017d9190610236565b905060128160ff1611156101d35760405162461bcd60e51b815260206004820152601660248201527f434f413a20746f6f206d616e7920646563696d616c73000000000000000000006044820152606401610081565b60ff16601203600a0a600155506102609050565b80516001600160a01b03811681146101fe57600080fd5b919050565b6000806040838503121561021657600080fd5b61021f836101e7565b915061022d602084016101e7565b90509250929050565b60006020828403121561024857600080fd5b815160ff8116811461025957600080fd5b9392505050565b60805160601c6104e761027d600039600060f001526104e76000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806398d5fdca1161005b57806398d5fdca146100dc578063a1175279146100e4578063d5f39488146100eb578063db6d8fcf1461011257600080fd5b80633c1e6ff514610082578063412ad1cc1461009e5780637dc0d1d0146100b1575b600080fd5b61008b60015481565b6040519081526020015b60405180910390f35b61008b6100ac366004610314565b610128565b6000546100c4906001600160a01b031681565b6040516001600160a01b039091168152602001610095565b61008b61013e565b600061008b565b6100c47f000000000000000000000000000000000000000000000000000000000000000081565b61011a610150565b60405161009592919061037d565b60006001548261013891906103da565b92915050565b600080610149610194565b5092915050565b6000606060008061015f610194565b6040805160b09290921b6001600160b01b03191660208301528051600a818403018152602a9092019052909590945092505050565b60008060008060008060008054906101000a90046001600160a01b03166001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b1580156101e957600080fd5b505afa1580156101fd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610221919061032d565b9450945050935093508369ffffffffffffffffffff168169ffffffffffffffffffff16101561028b5760405162461bcd60e51b815260206004820152601160248201527021a7a09d1029ba30b6329030b739bbb2b960791b60448201526064015b60405180910390fd5b816102d05760405162461bcd60e51b8152602060048201526015602482015274434f413a20526f756e6420696e636f6d706c65746560581b6044820152606401610282565b6102d9836102e5565b96939550929350505050565b6000600154826101389190610416565b805169ffffffffffffffffffff8116811461030f57600080fd5b919050565b60006020828403121561032657600080fd5b5035919050565b600080600080600060a0868803121561034557600080fd5b61034e866102f5565b9450602086015193506040860151925060608601519150610371608087016102f5565b90509295509295909350565b82815260006020604081840152835180604085015260005b818110156103b157858101830151858201606001528201610395565b818111156103c3576000606083870101525b50601f01601f191692909201606001949350505050565b6000826103f757634e487b7160e01b600052601260045260246000fd5b600160ff1b8214600019841416156104115761041161049b565b500590565b60006001600160ff1b038184138284138082168684048611161561043c5761043c61049b565b600160ff1b600087128281168783058912161561045b5761045b61049b565b600087129250878205871284841616156104775761047761049b565b8785058712818416161561048d5761048d61049b565b505050929093029392505050565b634e487b7160e01b600052601160045260246000fdfea26469706673582212203459320382968a6de925a8b5da344decc466bb782b12e011f776ee91acce614164736f6c63430008070033";

export class ChainlinkOracleWrapper__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _oracle: string,
    _deployer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ChainlinkOracleWrapper> {
    return super.deploy(
      _oracle,
      _deployer,
      overrides || {}
    ) as Promise<ChainlinkOracleWrapper>;
  }
  getDeployTransaction(
    _oracle: string,
    _deployer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_oracle, _deployer, overrides || {});
  }
  attach(address: string): ChainlinkOracleWrapper {
    return super.attach(address) as ChainlinkOracleWrapper;
  }
  connect(signer: Signer): ChainlinkOracleWrapper__factory {
    return super.connect(signer) as ChainlinkOracleWrapper__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChainlinkOracleWrapperInterface {
    return new utils.Interface(_abi) as ChainlinkOracleWrapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChainlinkOracleWrapper {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ChainlinkOracleWrapper;
  }
}
