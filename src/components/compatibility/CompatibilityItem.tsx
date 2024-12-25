import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

interface CompatibilityItemProps {
  text: string;
}

export function CompatibilityItem({ text }: CompatibilityItemProps) {
  return (
    <div className="flex items-center gap-2">
      <CheckCircleIcon className="w-5 h-5 text-emerald-500" />
      <span className="text-sm text-gray-700">{text}</span>
    </div>
  );
}