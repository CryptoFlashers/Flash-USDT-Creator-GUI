import React from 'react';

export function TetherIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 2000 2000" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="1000" cy="1000" r="1000" fill="#26A17B"/>
      <path d="M1000 400C1331.4 400 1600 466.667 1600 550C1600 633.333 1331.4 700 1000 700C668.6 700 400 633.333 400 550C400 466.667 668.6 400 1000 400Z" fill="white"/>
      <path d="M1000 1600V700M400 550V750C400 833.333 668.6 900 1000 900C1331.4 900 1600 833.333 1600 750V550" stroke="white" strokeWidth="100"/>
    </svg>
  );
}