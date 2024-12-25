import React from 'react';

export function WalletLoader() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Load Flash USDT Wallet</h2>
      <div className="bg-red-50 border border-red-200 rounded p-4 mb-4">
        <p className="text-red-600 text-sm">Please don't buy the wallet from another source than SatoshiBox.</p>
        <p className="text-red-600 text-sm">Every wallet is locked on computer MAC address and IP and cannot be used in another computer.</p>
        <p className="text-red-600 text-sm">This way our users are protected from any scammers from Telegram or other platforms.</p>
      </div>
      <div className="flex gap-4 items-center">
        <button className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
          Open Wallet
        </button>
        <input
          type="text"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
          value="C:\Desktop\USDT (tether)wallet.dat"
          readOnly
        />
        <button className="px-6 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors">
          Buy Wallet
        </button>
      </div>
    </div>
  );
}