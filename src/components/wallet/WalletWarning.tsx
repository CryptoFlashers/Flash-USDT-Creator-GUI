import React from 'react';

export function WalletWarning() {
  return (
    <div className="bg-red-50 border border-red-200 rounded p-4">
      <p className="text-red-600 text-sm mb-2">
        Please don't buy the wallet from another source than SatoshiBox.
      </p>
      <p className="text-red-600 text-sm mb-2">
        Every wallet is locked on computer MAC address and IP and cannot be used in another computer.
      </p>
      <p className="text-red-600 text-sm">
        This way our users are protected from any scammers from Telegram or other platforms.
      </p>
    </div>
  );
}