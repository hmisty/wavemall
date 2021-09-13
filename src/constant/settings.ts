import { newAddress2HexAddress } from '../utils/NewChainUtils'

export const TARGET_CHAINID = process.env.NEXT_PUBLIC_NETWORK_CHAINID
export const GRAPH_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT
export const NEW_NFT_EXCHANGE_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_NEW_NFT_EXCHANGE_CONTRACT_ADDRESS
export const FIXED_PRICE_SALE_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_FIXED_PRICE_SALE_CONTRACT_ADDRESS
export const ENGLISH_AUCTION_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_ENGLISH_AUCTION_CONTRACT_ADDRESS
export const DUTCH_AUCTION_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_DUTCH_AUCTION_CONTRACT_ADDRESS
export const DESIGNATED_SALE_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_DESIGNATED_SALE_CONTRACT_ADDRESS
export const FILTER_START_BLOCK = process.env.NEXT_PUBLIC_START_BLOCK
export const WNEW_ADDRESS = process.env.NEXT_PUBLIC_WNEW_ADDRESS
export const NFT_VIEWER_URL = process.env.NEXT_PUBLIC_NFT_VIEWER_URL
export const OPERATION_FEE = process.env.NEXT_PUBLIC_OPERATION_FEE
export const NEWMALL_COLLECTION_CONTRACT = process.env.NEXT_PUBLIC_NEWMALL_COLLECTION_CONTRACT
export const NEWTON_COLLECTION_NFT_CONTRACT = process.env.NEXT_PUBLIC_NEWTON_COLLECTION_NFT_CONTRACT
export const OPERATION_FEE_RECEIPT_ADDRESS = newAddress2HexAddress(
  process.env.NEXT_PUBLIC_OPERATION_FEE_RECEIPT_ADDRESS
)
