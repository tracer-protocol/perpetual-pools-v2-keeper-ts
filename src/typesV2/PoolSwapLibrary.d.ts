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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface PoolSwapLibraryInterface extends ethers.utils.Interface {
  functions: {
    "MAX_DECIMALS()": FunctionFragment;
    "WAD_PRECISION()": FunctionFragment;
    "appropriateUpdateIntervalId(uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
    "calculatePriceChange(tuple)": FunctionFragment;
    "compareDecimals(bytes16,bytes16)": FunctionFragment;
    "convertDecimalToUInt(bytes16)": FunctionFragment;
    "convertUIntToDecimal(uint256)": FunctionFragment;
    "divInt(int256,int256)": FunctionFragment;
    "fromWad(uint256,uint256)": FunctionFragment;
    "getBalancesAfterFees(uint256,uint256,uint256)": FunctionFragment;
    "getBurn(bytes16,uint256)": FunctionFragment;
    "getLossAmount(bytes16,uint256)": FunctionFragment;
    "getLossMultiplier(bytes16,int8,bytes16)": FunctionFragment;
    "getMint(bytes16,uint256)": FunctionFragment;
    "getMintAmount(uint256,uint256,uint256,uint256)": FunctionFragment;
    "getMintWithBurns(bytes16,bytes16,uint256,uint256)": FunctionFragment;
    "getPrice(uint256,uint256)": FunctionFragment;
    "getRatio(uint256,uint256)": FunctionFragment;
    "getUpdatedAggregateBalance(tuple)": FunctionFragment;
    "getWithdrawAmountOnBurn(uint256,uint256,uint256,uint256)": FunctionFragment;
    "isBeforeFrontRunningInterval(uint256,uint256,uint256,uint256)": FunctionFragment;
    "mulFraction(uint256,uint256,uint256)": FunctionFragment;
    "multiplyDecimalByUInt(bytes16,uint256)": FunctionFragment;
    "one()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "MAX_DECIMALS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "WAD_PRECISION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "appropriateUpdateIntervalId",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "calculatePriceChange",
    values: [
      {
        oldPrice: BigNumberish;
        newPrice: BigNumberish;
        longBalance: BigNumberish;
        shortBalance: BigNumberish;
        leverageAmount: BytesLike;
        fee: BytesLike;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "compareDecimals",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "convertDecimalToUInt",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "convertUIntToDecimal",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "divInt",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "fromWad",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBalancesAfterFees",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBurn",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getLossAmount",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getLossMultiplier",
    values: [BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getMint",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMintAmount",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMintWithBurns",
    values: [BytesLike, BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPrice",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRatio",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUpdatedAggregateBalance",
    values: [
      {
        longPrice: BytesLike;
        shortPrice: BytesLike;
        currentUpdateIntervalId: BigNumberish;
        updateIntervalId: BigNumberish;
        longMintAmount: BigNumberish;
        longBurnAmount: BigNumberish;
        shortMintAmount: BigNumberish;
        shortBurnAmount: BigNumberish;
        longBurnShortMintAmount: BigNumberish;
        shortBurnLongMintAmount: BigNumberish;
        burnFee: BytesLike;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getWithdrawAmountOnBurn",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isBeforeFrontRunningInterval",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mulFraction",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "multiplyDecimalByUInt",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "one", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "MAX_DECIMALS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "WAD_PRECISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "appropriateUpdateIntervalId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculatePriceChange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "compareDecimals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "convertDecimalToUInt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "convertUIntToDecimal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "divInt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fromWad", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getBalancesAfterFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getBurn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getLossAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLossMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getMint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getMintAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMintWithBurns",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getRatio", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getUpdatedAggregateBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWithdrawAmountOnBurn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isBeforeFrontRunningInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mulFraction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "multiplyDecimalByUInt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "one", data: BytesLike): Result;

  events: {};
}

export class PoolSwapLibrary extends BaseContract {
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

  interface: PoolSwapLibraryInterface;

  functions: {
    MAX_DECIMALS(overrides?: CallOverrides): Promise<[BigNumber]>;

    WAD_PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    appropriateUpdateIntervalId(
      timestamp: BigNumberish,
      lastPriceTimestamp: BigNumberish,
      frontRunningInterval: BigNumberish,
      updateInterval: BigNumberish,
      currentUpdateIntervalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calculatePriceChange(
      priceChange: {
        oldPrice: BigNumberish;
        newPrice: BigNumberish;
        longBalance: BigNumberish;
        shortBalance: BigNumberish;
        leverageAmount: BytesLike;
        fee: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

    compareDecimals(
      x: BytesLike,
      y: BytesLike,
      overrides?: CallOverrides
    ): Promise<[number]>;

    convertDecimalToUInt(
      ratio: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    convertUIntToDecimal(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    divInt(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    fromWad(
      _wadValue: BigNumberish,
      _decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getBalancesAfterFees(
      reward: BigNumberish,
      shortBalance: BigNumberish,
      longBalance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    getBurn(
      price: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getLossAmount(
      lossMultiplier: BytesLike,
      balance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getLossMultiplier(
      ratio: BytesLike,
      direction: BigNumberish,
      leverage: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getMint(
      price: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getMintAmount(
      tokenSupply: BigNumberish,
      amountIn: BigNumberish,
      balance: BigNumberish,
      shadowBalance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getMintWithBurns(
      price: BytesLike,
      oppositePrice: BytesLike,
      amount: BigNumberish,
      amountBurnedInstantMint: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPrice(
      sideBalance: BigNumberish,
      tokenSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRatio(
      _numerator: BigNumberish,
      _denominator: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getUpdatedAggregateBalance(
      data: {
        longPrice: BytesLike;
        shortPrice: BytesLike;
        currentUpdateIntervalId: BigNumberish;
        updateIntervalId: BigNumberish;
        longMintAmount: BigNumberish;
        longBurnAmount: BigNumberish;
        shortMintAmount: BigNumberish;
        shortBurnAmount: BigNumberish;
        longBurnShortMintAmount: BigNumberish;
        shortBurnLongMintAmount: BigNumberish;
        burnFee: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        _newLongTokens: BigNumber;
        _newShortTokens: BigNumber;
        _longBurnFee: BigNumber;
        _shortBurnFee: BigNumber;
        _newSettlementTokens: BigNumber;
      }
    >;

    getWithdrawAmountOnBurn(
      tokenSupply: BigNumberish,
      amountIn: BigNumberish,
      balance: BigNumberish,
      shadowBalance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isBeforeFrontRunningInterval(
      subjectTime: BigNumberish,
      lastPriceTimestamp: BigNumberish,
      updateInterval: BigNumberish,
      frontRunningInterval: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    mulFraction(
      number: BigNumberish,
      numerator: BigNumberish,
      denominator: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    multiplyDecimalByUInt(
      a: BytesLike,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    one(overrides?: CallOverrides): Promise<[string]>;
  };

  MAX_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;

  WAD_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

  appropriateUpdateIntervalId(
    timestamp: BigNumberish,
    lastPriceTimestamp: BigNumberish,
    frontRunningInterval: BigNumberish,
    updateInterval: BigNumberish,
    currentUpdateIntervalId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculatePriceChange(
    priceChange: {
      oldPrice: BigNumberish;
      newPrice: BigNumberish;
      longBalance: BigNumberish;
      shortBalance: BigNumberish;
      leverageAmount: BytesLike;
      fee: BytesLike;
    },
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

  compareDecimals(
    x: BytesLike,
    y: BytesLike,
    overrides?: CallOverrides
  ): Promise<number>;

  convertDecimalToUInt(
    ratio: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  convertUIntToDecimal(
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  divInt(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  fromWad(
    _wadValue: BigNumberish,
    _decimals: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getBalancesAfterFees(
    reward: BigNumberish,
    shortBalance: BigNumberish,
    longBalance: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  getBurn(
    price: BytesLike,
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getLossAmount(
    lossMultiplier: BytesLike,
    balance: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getLossMultiplier(
    ratio: BytesLike,
    direction: BigNumberish,
    leverage: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getMint(
    price: BytesLike,
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getMintAmount(
    tokenSupply: BigNumberish,
    amountIn: BigNumberish,
    balance: BigNumberish,
    shadowBalance: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getMintWithBurns(
    price: BytesLike,
    oppositePrice: BytesLike,
    amount: BigNumberish,
    amountBurnedInstantMint: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPrice(
    sideBalance: BigNumberish,
    tokenSupply: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getRatio(
    _numerator: BigNumberish,
    _denominator: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getUpdatedAggregateBalance(
    data: {
      longPrice: BytesLike;
      shortPrice: BytesLike;
      currentUpdateIntervalId: BigNumberish;
      updateIntervalId: BigNumberish;
      longMintAmount: BigNumberish;
      longBurnAmount: BigNumberish;
      shortMintAmount: BigNumberish;
      shortBurnAmount: BigNumberish;
      longBurnShortMintAmount: BigNumberish;
      shortBurnLongMintAmount: BigNumberish;
      burnFee: BytesLike;
    },
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      _newLongTokens: BigNumber;
      _newShortTokens: BigNumber;
      _longBurnFee: BigNumber;
      _shortBurnFee: BigNumber;
      _newSettlementTokens: BigNumber;
    }
  >;

  getWithdrawAmountOnBurn(
    tokenSupply: BigNumberish,
    amountIn: BigNumberish,
    balance: BigNumberish,
    shadowBalance: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isBeforeFrontRunningInterval(
    subjectTime: BigNumberish,
    lastPriceTimestamp: BigNumberish,
    updateInterval: BigNumberish,
    frontRunningInterval: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  mulFraction(
    number: BigNumberish,
    numerator: BigNumberish,
    denominator: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  multiplyDecimalByUInt(
    a: BytesLike,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  one(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    MAX_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;

    WAD_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    appropriateUpdateIntervalId(
      timestamp: BigNumberish,
      lastPriceTimestamp: BigNumberish,
      frontRunningInterval: BigNumberish,
      updateInterval: BigNumberish,
      currentUpdateIntervalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculatePriceChange(
      priceChange: {
        oldPrice: BigNumberish;
        newPrice: BigNumberish;
        longBalance: BigNumberish;
        shortBalance: BigNumberish;
        leverageAmount: BytesLike;
        fee: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

    compareDecimals(
      x: BytesLike,
      y: BytesLike,
      overrides?: CallOverrides
    ): Promise<number>;

    convertDecimalToUInt(
      ratio: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    convertUIntToDecimal(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    divInt(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    fromWad(
      _wadValue: BigNumberish,
      _decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBalancesAfterFees(
      reward: BigNumberish,
      shortBalance: BigNumberish,
      longBalance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    getBurn(
      price: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLossAmount(
      lossMultiplier: BytesLike,
      balance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLossMultiplier(
      ratio: BytesLike,
      direction: BigNumberish,
      leverage: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getMint(
      price: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMintAmount(
      tokenSupply: BigNumberish,
      amountIn: BigNumberish,
      balance: BigNumberish,
      shadowBalance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMintWithBurns(
      price: BytesLike,
      oppositePrice: BytesLike,
      amount: BigNumberish,
      amountBurnedInstantMint: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPrice(
      sideBalance: BigNumberish,
      tokenSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getRatio(
      _numerator: BigNumberish,
      _denominator: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getUpdatedAggregateBalance(
      data: {
        longPrice: BytesLike;
        shortPrice: BytesLike;
        currentUpdateIntervalId: BigNumberish;
        updateIntervalId: BigNumberish;
        longMintAmount: BigNumberish;
        longBurnAmount: BigNumberish;
        shortMintAmount: BigNumberish;
        shortBurnAmount: BigNumberish;
        longBurnShortMintAmount: BigNumberish;
        shortBurnLongMintAmount: BigNumberish;
        burnFee: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        _newLongTokens: BigNumber;
        _newShortTokens: BigNumber;
        _longBurnFee: BigNumber;
        _shortBurnFee: BigNumber;
        _newSettlementTokens: BigNumber;
      }
    >;

    getWithdrawAmountOnBurn(
      tokenSupply: BigNumberish,
      amountIn: BigNumberish,
      balance: BigNumberish,
      shadowBalance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isBeforeFrontRunningInterval(
      subjectTime: BigNumberish,
      lastPriceTimestamp: BigNumberish,
      updateInterval: BigNumberish,
      frontRunningInterval: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    mulFraction(
      number: BigNumberish,
      numerator: BigNumberish,
      denominator: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    multiplyDecimalByUInt(
      a: BytesLike,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    one(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    MAX_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;

    WAD_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    appropriateUpdateIntervalId(
      timestamp: BigNumberish,
      lastPriceTimestamp: BigNumberish,
      frontRunningInterval: BigNumberish,
      updateInterval: BigNumberish,
      currentUpdateIntervalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculatePriceChange(
      priceChange: {
        oldPrice: BigNumberish;
        newPrice: BigNumberish;
        longBalance: BigNumberish;
        shortBalance: BigNumberish;
        leverageAmount: BytesLike;
        fee: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    compareDecimals(
      x: BytesLike,
      y: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    convertDecimalToUInt(
      ratio: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    convertUIntToDecimal(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    divInt(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fromWad(
      _wadValue: BigNumberish,
      _decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBalancesAfterFees(
      reward: BigNumberish,
      shortBalance: BigNumberish,
      longBalance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBurn(
      price: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLossAmount(
      lossMultiplier: BytesLike,
      balance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLossMultiplier(
      ratio: BytesLike,
      direction: BigNumberish,
      leverage: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMint(
      price: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMintAmount(
      tokenSupply: BigNumberish,
      amountIn: BigNumberish,
      balance: BigNumberish,
      shadowBalance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMintWithBurns(
      price: BytesLike,
      oppositePrice: BytesLike,
      amount: BigNumberish,
      amountBurnedInstantMint: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPrice(
      sideBalance: BigNumberish,
      tokenSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRatio(
      _numerator: BigNumberish,
      _denominator: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUpdatedAggregateBalance(
      data: {
        longPrice: BytesLike;
        shortPrice: BytesLike;
        currentUpdateIntervalId: BigNumberish;
        updateIntervalId: BigNumberish;
        longMintAmount: BigNumberish;
        longBurnAmount: BigNumberish;
        shortMintAmount: BigNumberish;
        shortBurnAmount: BigNumberish;
        longBurnShortMintAmount: BigNumberish;
        shortBurnLongMintAmount: BigNumberish;
        burnFee: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWithdrawAmountOnBurn(
      tokenSupply: BigNumberish,
      amountIn: BigNumberish,
      balance: BigNumberish,
      shadowBalance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isBeforeFrontRunningInterval(
      subjectTime: BigNumberish,
      lastPriceTimestamp: BigNumberish,
      updateInterval: BigNumberish,
      frontRunningInterval: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mulFraction(
      number: BigNumberish,
      numerator: BigNumberish,
      denominator: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    multiplyDecimalByUInt(
      a: BytesLike,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    one(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_DECIMALS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    WAD_PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    appropriateUpdateIntervalId(
      timestamp: BigNumberish,
      lastPriceTimestamp: BigNumberish,
      frontRunningInterval: BigNumberish,
      updateInterval: BigNumberish,
      currentUpdateIntervalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculatePriceChange(
      priceChange: {
        oldPrice: BigNumberish;
        newPrice: BigNumberish;
        longBalance: BigNumberish;
        shortBalance: BigNumberish;
        leverageAmount: BytesLike;
        fee: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    compareDecimals(
      x: BytesLike,
      y: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    convertDecimalToUInt(
      ratio: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    convertUIntToDecimal(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    divInt(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fromWad(
      _wadValue: BigNumberish,
      _decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBalancesAfterFees(
      reward: BigNumberish,
      shortBalance: BigNumberish,
      longBalance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBurn(
      price: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLossAmount(
      lossMultiplier: BytesLike,
      balance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLossMultiplier(
      ratio: BytesLike,
      direction: BigNumberish,
      leverage: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMint(
      price: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMintAmount(
      tokenSupply: BigNumberish,
      amountIn: BigNumberish,
      balance: BigNumberish,
      shadowBalance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMintWithBurns(
      price: BytesLike,
      oppositePrice: BytesLike,
      amount: BigNumberish,
      amountBurnedInstantMint: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPrice(
      sideBalance: BigNumberish,
      tokenSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRatio(
      _numerator: BigNumberish,
      _denominator: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUpdatedAggregateBalance(
      data: {
        longPrice: BytesLike;
        shortPrice: BytesLike;
        currentUpdateIntervalId: BigNumberish;
        updateIntervalId: BigNumberish;
        longMintAmount: BigNumberish;
        longBurnAmount: BigNumberish;
        shortMintAmount: BigNumberish;
        shortBurnAmount: BigNumberish;
        longBurnShortMintAmount: BigNumberish;
        shortBurnLongMintAmount: BigNumberish;
        burnFee: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWithdrawAmountOnBurn(
      tokenSupply: BigNumberish,
      amountIn: BigNumberish,
      balance: BigNumberish,
      shadowBalance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isBeforeFrontRunningInterval(
      subjectTime: BigNumberish,
      lastPriceTimestamp: BigNumberish,
      updateInterval: BigNumberish,
      frontRunningInterval: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mulFraction(
      number: BigNumberish,
      numerator: BigNumberish,
      denominator: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    multiplyDecimalByUInt(
      a: BytesLike,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    one(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
