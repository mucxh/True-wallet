import { Chain } from '@/types'

export const SUPPORTED_CHAINS: Record<string, Chain> = {
  ethereum: {
    id: 'ethereum',
    name: 'Ethereum',
    rpcUrl: 'https://eth-mainnet.g.alchemy.com/v2/demo',
    chainId: 1,
    explorer: 'https://etherscan.io',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
  },
  arbitrum: {
    id: 'arbitrum',
    name: 'Arbitrum',
    rpcUrl: 'https://arb-mainnet.g.alchemy.com/v2/demo',
    chainId: 42161,
    explorer: 'https://arbiscan.io',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
  },
  optimism: {
    id: 'optimism',
    name: 'Optimism',
    rpcUrl: 'https://opt-mainnet.g.alchemy.com/v2/demo',
    chainId: 10,
    explorer: 'https://optimistic.etherscan.io',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
  },
  polygon: {
    id: 'polygon',
    name: 'Polygon',
    rpcUrl: 'https://polygon-mainnet.g.alchemy.com/v2/demo',
    chainId: 137,
    explorer: 'https://polygonscan.com',
    nativeCurrency: {
      name: 'Polygon',
      symbol: 'MATIC',
      decimals: 18,
    },
  },
  base: {
    id: 'base',
    name: 'Base',
    rpcUrl: 'https://base-mainnet.g.alchemy.com/v2/demo',
    chainId: 8453,
    explorer: 'https://basescan.org',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
  },
  bitcoin: {
    id: 'bitcoin',
    name: 'Bitcoin',
    rpcUrl: 'https://blockstream.info/api',
    chainId: 0,
    explorer: 'https://blockstream.info',
    nativeCurrency: {
      name: 'Bitcoin',
      symbol: 'BTC',
      decimals: 8,
    },
  },
  solana: {
    id: 'solana',
    name: 'Solana',
    rpcUrl: 'https://api.mainnet-beta.solana.com',
    chainId: 101,
    explorer: 'https://solscan.io',
    nativeCurrency: {
      name: 'Solana',
      symbol: 'SOL',
      decimals: 9,
    },
  },
}

export const CHAIN_LIST = Object.values(SUPPORTED_CHAINS)
