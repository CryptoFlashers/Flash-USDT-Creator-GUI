import React from 'react';
import { Header } from './components/header/Header';
import { CompatibilityList } from './components/compatibility/CompatibilityList';
import { WalletLoader } from './components/wallet/WalletLoader';
import { SendForm } from './components/send/SendForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <Header />
        <CompatibilityList />
        <div className="p-6 space-y-6">
          <WalletLoader />
          <SendForm />
        </div>
      </div>
    </div>
  );
}

export default App;