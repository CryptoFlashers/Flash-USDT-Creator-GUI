import React from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { RadioGroup } from '../ui/RadioGroup';

const networks = ['TRC20', 'ERC20', 'BEP20', 'BEP2', 'SOLANA', 'POLYGON'];

export function SendForm() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Send USDT</h2>
      <form className="space-y-4">
        <Input
          label="Recipient USDT address"
          type="text"
          placeholder="Enter USDT address"
          defaultValue="0x3a33e6531f82e1b82f956fc2226f36112995338"
        />
        
        <Input
          label="Amount USDT"
          type="number"
          defaultValue="2184"
        />

        <RadioGroup
          label="USDT Network"
          options={networks}
          name="network"
          defaultValue="ERC20"
        />

        <Button className="w-full">
          Send Flash!
        </Button>
      </form>
    </div>
  );
}