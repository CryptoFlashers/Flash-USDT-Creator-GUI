import React from 'react';
import { TetherIcon } from './icons/TetherIcon';

export function Header() {
  return (
    <div className="flex items-center justify-between bg-white p-4 border-b">
      <div className="flex items-center gap-4">
        <TetherIcon className="w-12 h-12" />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Flash USDT Sender</h1>
          <p className="text-sm text-gray-600">Send USDT into Tether Blockchain</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm text-gray-600">Daily limit: <span className="font-medium">100000 USDT</span></p>
        <p className="text-sm text-gray-600">Sent today: <span className="font-medium">0 USDT</span></p>
        <p className="text-sm text-gray-600">Sent total: <span className="font-medium">0 USDT</span></p>
      </div>
    </div>
  );
}