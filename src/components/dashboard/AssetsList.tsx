import { useWallet } from '@/store/walletStore'

export function AssetsList() {
  const { assets } = useWallet()

  return (
    <div>
      {assets.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-slate-400 mb-4">No assets yet</p>
          <p className="text-sm text-slate-500">Your assets will appear here once you receive tokens</p>
        </div>
      ) : (
        <div className="space-y-3">
          {assets.map((asset) => (
            <div key={`${asset.chainId}-${asset.symbol}`} className="bg-slate-700/30 p-4 rounded-lg flex justify-between items-center">
              <div>
                <p className="font-semibold text-white">{asset.symbol}</p>
                <p className="text-sm text-slate-400">{asset.name}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-white">{asset.balance} {asset.symbol}</p>
                {asset.usdValue && <p className="text-sm text-slate-400">${asset.usdValue}</p>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
