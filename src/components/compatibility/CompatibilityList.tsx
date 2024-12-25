import React from 'react';
import { CompatibilityItem } from './CompatibilityItem';

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
        <CompatibilityItem key={item} text={item} />
      ))}
    </div>
  );
}