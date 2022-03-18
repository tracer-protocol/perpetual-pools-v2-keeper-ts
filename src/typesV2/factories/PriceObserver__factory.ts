/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PriceObserver, PriceObserverInterface } from "../PriceObserver";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "writer",
        type: "address",
      },
    ],
    name: "WriterChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_NUM_ELEMS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "x",
        type: "int256",
      },
    ],
    name: "add",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "capacity",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "clear",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
    ],
    name: "get",
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
    name: "getAll",
    outputs: [
      {
        internalType: "int256[24]",
        name: "",
        type: "int256[24]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getWriter",
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
    name: "length",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numElems",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "observations",
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
    name: "owner",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_writer",
        type: "address",
      },
    ],
    name: "setWriter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6107b38061007e6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063715018a61161008c5780638da5cb5b116100665780638da5cb5b1461018e5780639507d39a146101b3578063d66e5726146101c6578063f2fde38b146101d757600080fd5b8063715018a61461015a5780637b3e82181461016257806387db03b71461016b57600080fd5b806352efea6e116100c857806352efea6e1461012e57806353ed5143146101365780635cfc1a511461014b57806366a9e5011461015257600080fd5b80631f7b6d32146100ef578063252c09d71461010657806339e2052314610119575b600080fd5b6001545b6040519081526020015b60405180910390f35b6100f3610114366004610687565b6101ea565b61012c610127366004610657565b610201565b005b61012c6102d4565b61013e610313565b6040516100fd91906106a0565b60186100f3565b6100f3601881565b61012c61034f565b6100f360015481565b61017e610179366004610687565b610383565b60405190151581526020016100fd565b6000546001600160a01b03165b6040516001600160a01b0390911681526020016100fd565b6100f36101c1366004610687565b61043a565b601a546001600160a01b031661019b565b61012c6101e5366004610657565b6104a2565b600281601881106101fa57600080fd5b0154905081565b6000546001600160a01b031633146102345760405162461bcd60e51b815260040161022b906106d2565b60405180910390fd5b6001600160a01b03811661028a5760405162461bcd60e51b815260206004820152601c60248201527f504f3a204e756c6c2061646472657373206e6f7420616c6c6f77656400000000604482015260640161022b565b601a80546001600160a01b0319166001600160a01b0383169081179091556040517fdf2afb002d33710875c19190ab5bdd8858cfc21b74586247f995ed4858f33b3d90600090a250565b6000546001600160a01b031633146102fe5760405162461bcd60e51b815260040161022b906106d2565b6000600181905561031190600290610610565b565b61031b61061f565b604080516103008101918290529060029060189082845b815481526020019060010190808311610332575050505050905090565b6000546001600160a01b031633146103795760405162461bcd60e51b815260040161022b906106d2565b610311600061053d565b601a546000906001600160a01b031633146103d85760405162461bcd60e51b81526020600482015260156024820152741413ce8814195c9b5a5cdcda5bdb8819195b9a5959605a1b604482015260640161022b565b600154601814156103f4576103ec8261058d565b506001919050565b81600261040060015490565b6018811061041057610410610767565b0155600180548190600090610426908390610707565b90915550600091506104359050565b919050565b600061044560015490565b82106104875760405162461bcd60e51b8152602060048201526011602482015270504f3a204f7574206f6620626f756e647360781b604482015260640161022b565b6002826018811061049a5761049a610767565b015492915050565b6000546001600160a01b031633146104cc5760405162461bcd60e51b815260040161022b906106d2565b6001600160a01b0381166105315760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161022b565b61053a8161053d565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600061059860015490565b905060015b818110156105eb57600281601881106105b8576105b8610767565b015460026105c760018461071f565b601881106105d7576105d7610767565b0155806105e381610736565b91505061059d565b508160026105fa60018461071f565b6018811061060a5761060a610767565b01555050565b5061053a90601881019061063e565b6040518061030001604052806018906020820280368337509192915050565b5b80821115610653576000815560010161063f565b5090565b60006020828403121561066957600080fd5b81356001600160a01b038116811461068057600080fd5b9392505050565b60006020828403121561069957600080fd5b5035919050565b6103008101818360005b60188110156106c95781518352602092830192909101906001016106aa565b50505092915050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6000821982111561071a5761071a610751565b500190565b60008282101561073157610731610751565b500390565b600060001982141561074a5761074a610751565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fdfea26469706673582212200d44e016389f7943f579c94e338fbb5e72025d8afd1db2f9d3d220164c1def8864736f6c63430008070033";

export class PriceObserver__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PriceObserver> {
    return super.deploy(overrides || {}) as Promise<PriceObserver>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PriceObserver {
    return super.attach(address) as PriceObserver;
  }
  connect(signer: Signer): PriceObserver__factory {
    return super.connect(signer) as PriceObserver__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PriceObserverInterface {
    return new utils.Interface(_abi) as PriceObserverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PriceObserver {
    return new Contract(address, _abi, signerOrProvider) as PriceObserver;
  }
}