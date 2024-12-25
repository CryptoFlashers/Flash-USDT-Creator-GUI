import React from 'react';
import { Button } from '../ui/Button';
import { WalletWarning } from './WalletWarning';

export function WalletLoader() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Load Flash USDT Wallet</h2>
      <WalletWarning />
      <div className="flex gap-4 items-center mt-4">
        <Button variant="secondary">
          Open Wallet
        </Button>
        <input
          type="text"
          className="flex-1 input-field bg-gray-50"
          value="C:\Desktop\USDT (tether)wallet.dat"
          readOnly
        />
        <Button>
          Buy Wallet
        </Button>
      </div>
    </div>
  );
}