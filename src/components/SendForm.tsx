import React from 'react';

const networks = ['TRC20', 'ERC20', 'BEP20', 'BEP2', 'SOLANA', 'POLYGON'];

export function SendForm() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Send USDT</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Recipient USDT address
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter USDT address"
            defaultValue="0x3a33e6531f82e1b82f956fc2226f36112995338"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount USDT
          </label>
          <input
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            defaultValue="2184"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            USDT Network
          </label>
          <div className="flex flex-wrap gap-3">
            {networks.map((network) => (
              <label key={network} className="flex items-center">
                <input
                  type="radio"
                  name="network"
                  value={network}
                  defaultChecked={network === 'ERC20'}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="ml-2 text-sm text-gray-700">{network}</span>
              </label>
            ))}
          </div>
        </div>

        <button className="w-full px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors">
          Send Flash!
        </button>
      </div>
    </div>
  );
}