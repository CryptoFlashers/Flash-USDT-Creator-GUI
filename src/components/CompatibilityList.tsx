import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

const compatibilities = [
  'Binance Compatible',
  'Coinbase Compatible',
  'Blockchain Compatible',
  'Kraken Compatible',
  'Any Wallet Compatible',
  'Any Exchange Compatible',
  'Casino Games Compatible',
  'Swap Programs Compatible'
];

export function CompatibilityList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-4 bg-gray-50">
      {compatibilities.map((item) => (
        <div key={item} className="flex items-center gap-2">
          <CheckCircleIcon className="w-5 h-5 text-green-500" />
          <span className="text-sm text-gray-700">{item}</span>
        </div>
      ))}
    </div>
  );
}