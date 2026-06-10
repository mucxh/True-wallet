import { useWallet } from '@/store/walletStore'

export function Navigation() {
  const { clearWallet, wallets, activeWalletIndex } = useWallet()
  const activeWallet = wallets[activeWalletIndex]

  return (
    <nav className="bg-slate-800/50 backdrop-blur-xl border-b border-purple-500/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            True Wallet
          </h1>
        </div>

        <div className="flex items-center gap-6">
          {activeWallet && (
            <div className="text-sm">
              <p className="text-slate-400">Active Address</p>
              <p className="text-white font-mono text-xs">
                {activeWallet.address.slice(0, 6)}...{activeWallet.address.slice(-4)}
              </p>
            </div>
          )}

          <button
            onClick={() => {
              if (confirm('Are you sure? This will clear your wallet from this device.')) {
                clearWallet()
              }
            }}
            className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition text-sm"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}
