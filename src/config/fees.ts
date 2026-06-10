/**
 * Fee Configuration for True Wallet
 * 0.1% fee on all transactions
 */

export const FEE_CONFIG = {
  // 0.1% fee in basis points (1 basis point = 0.01%)
  TRANSACTION_FEE_BPS: 10, // 10 basis points = 0.1%

  // Owner wallet addresses for different chains
  OWNER_WALLETS: {
    ethereum: '0x1234567890123456789012345678901234567890', // Replace with actual address
    arbitrum: '0x1234567890123456789012345678901234567890',
    optimism: '0x1234567890123456789012345678901234567890',
    polygon: '0x1234567890123456789012345678901234567890',
    base: '0x1234567890123456789012345678901234567890',
    bitcoin: '1A1z7agoat4oPLSzW83ND6xL26PN67ScN', // Replace with actual address
    solana: '11111111111111111111111111111111', // Replace with actual pubkey
  },

  // Minimum fee amounts (to avoid dust)
  MIN_FEE: {
    ethereum: 0.0001, // in ETH
    arbitrum: 0.0001,
    optimism: 0.0001,
    polygon: 0.01, // in MATIC
    base: 0.0001,
    bitcoin: 0.00001, // in BTC
    solana: 0.001, // in SOL
  },

  // Maximum fee cap (prevent excessive fees)
  MAX_FEE: {
    ethereum: 1, // in ETH
    arbitrum: 1,
    optimism: 1,
    polygon: 100, // in MATIC
    base: 1,
    bitcoin: 0.1, // in BTC
    solana: 10, // in SOL
  },
}

/**
 * Calculate transaction fee
 * @param amount - Transaction amount in token units
 * @param decimals - Token decimals
 * @returns Fee amount
 */
export function calculateFee(amount: number, decimals: number = 18): number {
  const fee = (amount * FEE_CONFIG.TRANSACTION_FEE_BPS) / 10000
  return Math.round(fee * Math.pow(10, decimals)) / Math.pow(10, decimals)
}

/**
 * Get fee with min/max constraints
 * @param amount - Transaction amount
 * @param chainId - Chain identifier
 * @param decimals - Token decimals
 * @returns Constrained fee amount
 */
export function getConstrainedFee(
  amount: number,
  chainId: string,
  decimals: number = 18
): number {
  const baseFee = calculateFee(amount, decimals)
  const minFee = FEE_CONFIG.MIN_FEE[chainId as keyof typeof FEE_CONFIG.MIN_FEE] || 0.0001
  const maxFee = FEE_CONFIG.MAX_FEE[chainId as keyof typeof FEE_CONFIG.MAX_FEE] || 1

  return Math.max(minFee, Math.min(baseFee, maxFee))
}

/**
 * Get owner wallet for chain
 */
export function getOwnerWallet(chainId: string): string {
  return FEE_CONFIG.OWNER_WALLETS[chainId as keyof typeof FEE_CONFIG.OWNER_WALLETS] || ''
}
