import React from 'react';

interface StatItemProps {
  label: string;
  value: string;
}

function StatItem({ label, value }: StatItemProps) {
  return (
    <p className="text-sm text-gray-600">
      {label}: <span className="font-medium">{value}</span>
    </p>
  );
}

export function Stats() {
  return (
    <div className="text-right">
      <StatItem label="Daily limit" value="100000 USDT" />
      <StatItem label="Sent today" value="0 USDT" />
      <StatItem label="Sent total" value="0 USDT" />
    </div>
  );
}