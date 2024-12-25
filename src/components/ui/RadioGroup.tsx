import React from 'react';

interface RadioGroupProps {
  label: string;
  options: string[];
  name: string;
  defaultValue?: string;
}

export function RadioGroup({ label, options, name, defaultValue }: RadioGroupProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="flex flex-wrap gap-3">
        {options.map((option) => (
          <label key={option} className="flex items-center">
            <input
              type="radio"
              name={name}
              value={option}
              defaultChecked={option === defaultValue}
              className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
            />
            <span className="ml-2 text-sm text-gray-700">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}