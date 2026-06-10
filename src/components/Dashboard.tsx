import { useWallet } from '@/store/walletStore'

export function Dashboard() {
  const { wallets } = useWallet()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header with Fee Info */}
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">True Wallet</h1>
            <p className="text-slate-400">Non-Custodial Multi-Chain Crypto Wallet</p>
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3 text-sm">
            <p className="text-purple-300">💡 0.1% transaction fee</p>
            <p className="text-slate-400 text-xs">Supports wallet development</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-purple-500/20">
              {/* View Selector */}
              <div className="flex gap-4 mb-6 border-b border-slate-700/50">
                <button className="pb-4 px-4 font-medium text-purple-400 border-b-2 border-purple-400 transition">
                  Send
                </button>
                <button className="pb-4 px-4 font-medium text-slate-400 hover:text-slate-300 transition">
                  Assets
                </button>
                <button className="pb-4 px-4 font-medium text-slate-400 hover:text-slate-300 transition">
                  Receive
                </button>
              </div>

              {/* Send Form */}
              <form className="space-y-6">
                <div>
                  <label className="block text-sm text-slate-300 mb-2">Select Chain</label>
                  <select className="w-full bg-slate-700/50 border border-slate-600 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500">
                    <option value="ethereum">Ethereum (ETH)</option>
                    <option value="bitcoin">Bitcoin (BTC)</option>
                    <option value="solana">Solana (SOL)</option>
                    <option value="polygon">Polygon (MATIC)</option>
                    <option value="arbitrum">Arbitrum (ETH)</option>
                    <option value="optimism">Optimism (ETH)</option>
                    <option value="base">Base (ETH)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-2">Recipient Address</label>
                  <input
                    type="text"
                    placeholder="Enter recipient address"
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg p-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-2">Amount</label>
                  <input
                    type="number"
                    placeholder="0.0"
                    step="0.0001"
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg p-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transition"
                >
                  Send Transaction
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar - Fee Info */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-purple-500/20">
              <h2 className="text-xl font-semibold text-white mb-4">Fee Structure</h2>
              <div className="space-y-4 text-sm">
                <div className="bg-slate-700/30 rounded-lg p-3">
                  <p className="text-slate-400">Transaction Fee</p>
                  <p className="text-xl font-bold text-purple-400 mt-1">0.1%</p>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-3">
                  <p className="text-slate-400">Min Fee</p>
                  <p className="text-white font-mono text-xs mt-1">Chain dependent</p>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-3">
                  <p className="text-slate-400">Max Fee</p>
                  <p className="text-white font-mono text-xs mt-1">Capped per chain</p>
                </div>
                <div className="border-t border-slate-700 pt-3 mt-3">
                  <p className="text-slate-500 text-xs">
                    ✨ Fees support continuous wallet development and security
                  </p>
                </div>
              </div>
            </div>

            {/* Supported Chains */}
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-purple-500/20">
              <h2 className="text-xl font-semibold text-white mb-4">Supported Chains</h2>
              <div className="space-y-2">
                {['Ethereum', 'Bitcoin', 'Solana', 'Polygon', 'Arbitrum', 'Optimism', 'Base'].map((chain) => (
                  <div key={chain} className="flex items-center justify-between p-2 bg-slate-700/30 rounded">
                    <span className="text-sm text-slate-300">{chain}</span>
                    <span className="text-xs bg-purple-500/30 text-purple-300 px-2 py-1 rounded">Active</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
