import React from 'react';
import { TetherIcon } from '../icons/TetherIcon';
import { Stats } from './Stats';

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
      <Stats />
    </div>
  );
}