import { type UtxoI } from "mainnet-js"

export type TokenList = (TokenDataNFT | TokenDataFT)[]

export interface TokenDataNFT {
  tokenId: string,
  nfts: UtxoI[],
  authUtxo?: UtxoI
}

export interface TokenDataFT {
  tokenId: string,
  amount: bigint,
  authUtxo?: UtxoI
}

export interface DappMetadata {
  description: string,
  icons: string[]
  name: string,
  url: string
}

export interface dialogInfo {
  message: string
  txid: string
}

export interface AbiInput {
  name: string;
  type: string;
}
export interface AbiFunction {
  name: string;
  covenant?: boolean;
  inputs: AbiInput[];
}
export interface Artifact {
  contractName: string;
  constructorInputs: AbiInput[];
  abi: AbiFunction[];
  bytecode: string;
  source: string;
  compiler: {
      name: string;
      version: string;
  };
  updatedAt: string;
}
export interface ContractInfo {
contract?: {
  abiFunction: AbiFunction;
  redeemScript: Uint8Array;
  artifact: Partial<Artifact>;
}
}