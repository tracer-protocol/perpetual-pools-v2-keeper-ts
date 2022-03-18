/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IPoolCommitterInterface extends ethers.utils.Interface {
  functions: {
    "claim(address)": FunctionFragment;
    "commit(uint8,uint256,bool,bool)": FunctionFragment;
    "executeCommitments(bool,uint256)": FunctionFragment;
    "getAggregateBalance(address)": FunctionFragment;
    "getAppropriateUpdateIntervalId()": FunctionFragment;
    "getPendingCommits()": FunctionFragment;
    "initialize(address,address,address,address,uint256,uint256,uint256)": FunctionFragment;
    "setBurningFee(uint256)": FunctionFragment;
    "setChangeInterval(uint256)": FunctionFragment;
    "setMintingFee(uint256)": FunctionFragment;
    "setQuoteAndPool(address,address)": FunctionFragment;
    "updateAggregateBalance(address)": FunctionFragment;
    "updateIntervalId()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "claim", values: [string]): string;
  encodeFunctionData(
    functionFragment: "commit",
    values: [BigNumberish, BigNumberish, boolean, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "executeCommitments",
    values: [boolean, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAggregateBalance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAppropriateUpdateIntervalId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPendingCommits",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      string,
      string,
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setBurningFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setChangeInterval",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMintingFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setQuoteAndPool",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAggregateBalance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateIntervalId",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "commit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeCommitments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAggregateBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAppropriateUpdateIntervalId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPendingCommits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setBurningFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setChangeInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMintingFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setQuoteAndPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAggregateBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateIntervalId",
    data: BytesLike
  ): Result;

  events: {
    "AggregateBalanceUpdated(address)": EventFragment;
    "BurningFeeSet(uint256)": EventFragment;
    "ChangeIntervalSet(uint256)": EventFragment;
    "Claim(address)": EventFragment;
    "CreateCommit(address,uint256,uint8,uint256,bytes16)": EventFragment;
    "ExecutedCommitsForInterval(uint256,bytes16)": EventFragment;
    "MintingFeeSet(uint256)": EventFragment;
    "QuoteAndPoolChanged(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AggregateBalanceUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BurningFeeSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChangeIntervalSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CreateCommit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecutedCommitsForInterval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MintingFeeSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "QuoteAndPoolChanged"): EventFragment;
}

export class IPoolCommitter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IPoolCommitterInterface;

  functions: {
    claim(
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    commit(
      commitType: BigNumberish,
      amount: BigNumberish,
      fromAggregateBalance: boolean,
      payForClaim: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeCommitments(
      boundedIntervals: boolean,
      numberOfIntervals: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAggregateBalance(
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber, BigNumber] & {
          longTokens: BigNumber;
          shortTokens: BigNumber;
          settlementTokens: BigNumber;
        }
      ] & {
        _balance: [BigNumber, BigNumber, BigNumber] & {
          longTokens: BigNumber;
          shortTokens: BigNumber;
          settlementTokens: BigNumber;
        };
      }
    >;

    getAppropriateUpdateIntervalId(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPendingCommits(
      overrides?: CallOverrides
    ): Promise<
      [
        [
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          longMintAmount: BigNumber;
          longBurnAmount: BigNumber;
          shortMintAmount: BigNumber;
          shortBurnAmount: BigNumber;
          shortBurnLongMintAmount: BigNumber;
          longBurnShortMintAmount: BigNumber;
          updateIntervalId: BigNumber;
        },
        [
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          longMintAmount: BigNumber;
          longBurnAmount: BigNumber;
          shortMintAmount: BigNumber;
          shortBurnAmount: BigNumber;
          shortBurnLongMintAmount: BigNumber;
          longBurnShortMintAmount: BigNumber;
          updateIntervalId: BigNumber;
        }
      ]
    >;

    initialize(
      _factory: string,
      _invariantCheckContract: string,
      _autoClaim: string,
      _factoryOwner: string,
      mintingFee: BigNumberish,
      burningFee: BigNumberish,
      _changeInterval: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBurningFee(
      _burningFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setChangeInterval(
      _changeInterval: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMintingFee(
      _mintingFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setQuoteAndPool(
      _quoteToken: string,
      _leveragedPool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateAggregateBalance(
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateIntervalId(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  claim(
    user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  commit(
    commitType: BigNumberish,
    amount: BigNumberish,
    fromAggregateBalance: boolean,
    payForClaim: boolean,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeCommitments(
    boundedIntervals: boolean,
    numberOfIntervals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAggregateBalance(
    user: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      longTokens: BigNumber;
      shortTokens: BigNumber;
      settlementTokens: BigNumber;
    }
  >;

  getAppropriateUpdateIntervalId(overrides?: CallOverrides): Promise<BigNumber>;

  getPendingCommits(
    overrides?: CallOverrides
  ): Promise<
    [
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        longMintAmount: BigNumber;
        longBurnAmount: BigNumber;
        shortMintAmount: BigNumber;
        shortBurnAmount: BigNumber;
        shortBurnLongMintAmount: BigNumber;
        longBurnShortMintAmount: BigNumber;
        updateIntervalId: BigNumber;
      },
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        longMintAmount: BigNumber;
        longBurnAmount: BigNumber;
        shortMintAmount: BigNumber;
        shortBurnAmount: BigNumber;
        shortBurnLongMintAmount: BigNumber;
        longBurnShortMintAmount: BigNumber;
        updateIntervalId: BigNumber;
      }
    ]
  >;

  initialize(
    _factory: string,
    _invariantCheckContract: string,
    _autoClaim: string,
    _factoryOwner: string,
    mintingFee: BigNumberish,
    burningFee: BigNumberish,
    _changeInterval: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBurningFee(
    _burningFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setChangeInterval(
    _changeInterval: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMintingFee(
    _mintingFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setQuoteAndPool(
    _quoteToken: string,
    _leveragedPool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateAggregateBalance(
    user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateIntervalId(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    claim(user: string, overrides?: CallOverrides): Promise<void>;

    commit(
      commitType: BigNumberish,
      amount: BigNumberish,
      fromAggregateBalance: boolean,
      payForClaim: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    executeCommitments(
      boundedIntervals: boolean,
      numberOfIntervals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getAggregateBalance(
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        longTokens: BigNumber;
        shortTokens: BigNumber;
        settlementTokens: BigNumber;
      }
    >;

    getAppropriateUpdateIntervalId(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPendingCommits(
      overrides?: CallOverrides
    ): Promise<
      [
        [
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          longMintAmount: BigNumber;
          longBurnAmount: BigNumber;
          shortMintAmount: BigNumber;
          shortBurnAmount: BigNumber;
          shortBurnLongMintAmount: BigNumber;
          longBurnShortMintAmount: BigNumber;
          updateIntervalId: BigNumber;
        },
        [
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          longMintAmount: BigNumber;
          longBurnAmount: BigNumber;
          shortMintAmount: BigNumber;
          shortBurnAmount: BigNumber;
          shortBurnLongMintAmount: BigNumber;
          longBurnShortMintAmount: BigNumber;
          updateIntervalId: BigNumber;
        }
      ]
    >;

    initialize(
      _factory: string,
      _invariantCheckContract: string,
      _autoClaim: string,
      _factoryOwner: string,
      mintingFee: BigNumberish,
      burningFee: BigNumberish,
      _changeInterval: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setBurningFee(
      _burningFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setChangeInterval(
      _changeInterval: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMintingFee(
      _mintingFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setQuoteAndPool(
      _quoteToken: string,
      _leveragedPool: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateAggregateBalance(
      user: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateIntervalId(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    AggregateBalanceUpdated(
      user?: string | null
    ): TypedEventFilter<[string], { user: string }>;

    BurningFeeSet(
      _burningFee?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { _burningFee: BigNumber }>;

    ChangeIntervalSet(
      _changeInterval?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { _changeInterval: BigNumber }>;

    Claim(user?: string | null): TypedEventFilter<[string], { user: string }>;

    CreateCommit(
      user?: string | null,
      amount?: BigNumberish | null,
      commitType?: BigNumberish | null,
      appropriateUpdateIntervalId?: null,
      mintingFee?: null
    ): TypedEventFilter<
      [string, BigNumber, number, BigNumber, string],
      {
        user: string;
        amount: BigNumber;
        commitType: number;
        appropriateUpdateIntervalId: BigNumber;
        mintingFee: string;
      }
    >;

    ExecutedCommitsForInterval(
      updateIntervalId?: BigNumberish | null,
      burningFee?: null
    ): TypedEventFilter<
      [BigNumber, string],
      { updateIntervalId: BigNumber; burningFee: string }
    >;

    MintingFeeSet(
      _mintingFee?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { _mintingFee: BigNumber }>;

    QuoteAndPoolChanged(
      quote?: string | null,
      pool?: string | null
    ): TypedEventFilter<[string, string], { quote: string; pool: string }>;
  };

  estimateGas: {
    claim(
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    commit(
      commitType: BigNumberish,
      amount: BigNumberish,
      fromAggregateBalance: boolean,
      payForClaim: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeCommitments(
      boundedIntervals: boolean,
      numberOfIntervals: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAggregateBalance(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAppropriateUpdateIntervalId(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPendingCommits(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _factory: string,
      _invariantCheckContract: string,
      _autoClaim: string,
      _factoryOwner: string,
      mintingFee: BigNumberish,
      burningFee: BigNumberish,
      _changeInterval: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBurningFee(
      _burningFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setChangeInterval(
      _changeInterval: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMintingFee(
      _mintingFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setQuoteAndPool(
      _quoteToken: string,
      _leveragedPool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateAggregateBalance(
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateIntervalId(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    claim(
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    commit(
      commitType: BigNumberish,
      amount: BigNumberish,
      fromAggregateBalance: boolean,
      payForClaim: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeCommitments(
      boundedIntervals: boolean,
      numberOfIntervals: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAggregateBalance(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAppropriateUpdateIntervalId(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPendingCommits(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _factory: string,
      _invariantCheckContract: string,
      _autoClaim: string,
      _factoryOwner: string,
      mintingFee: BigNumberish,
      burningFee: BigNumberish,
      _changeInterval: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBurningFee(
      _burningFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setChangeInterval(
      _changeInterval: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMintingFee(
      _mintingFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setQuoteAndPool(
      _quoteToken: string,
      _leveragedPool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateAggregateBalance(
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateIntervalId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}