import { Connection, PublicKey, Keypair, SystemProgram, Transaction } from '@solana/web3.js'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'

/**
 * Get Solana balance
 */
export async function getSolanaBalance(address: string, rpcUrl: string): Promise<string> {
  try {
    const connection = new Connection(rpcUrl)
    const publicKey = new PublicKey(address)
    const balance = await connection.getBalance(publicKey)
    return (balance / 1e9).toString() // Convert lamports to SOL
  } catch (error) {
    throw new Error(`Failed to get Solana balance: ${error}`)
  }
}

/**
 * Send SOL transaction
 */
export async function sendSolanaTransaction(
  from: string,
  to: string,
  amount: number,
  secretKey: Uint8Array,
  rpcUrl: string
): Promise<string> {
  try {
    const connection = new Connection(rpcUrl)
    const keypair = Keypair.fromSecretKey(secretKey)
    
    const instruction = SystemProgram.transfer({
      fromPubkey: new PublicKey(from),
      toPubkey: new PublicKey(to),
      lamports: amount * 1e9,
    })
    
    const transaction = new Transaction().add(instruction)
    const hash = await connection.sendTransaction(transaction, [keypair])
    
    return hash
  } catch (error) {
    throw new Error(`Failed to send Solana transaction: ${error}`)
  }
}

/**
 * Get Solana transaction history
 */
export async function getSolanaTransactions(
  address: string,
  rpcUrl: string,
  limit: number = 10
): Promise<any[]> {
  try {
    const connection = new Connection(rpcUrl)
    const publicKey = new PublicKey(address)
    const signatures = await connection.getSignaturesForAddress(publicKey, { limit })
    return signatures
  } catch (error) {
    throw new Error(`Failed to get transactions: ${error}`)
  }
}

/**
 * Validate Solana address
 */
export function isValidSolanaAddress(address: string): boolean {
  try {
    new PublicKey(address)
    return true
  } catch {
    return false
  }
}
