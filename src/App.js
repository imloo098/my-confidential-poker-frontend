import './App.css';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RainbowKitProvider, ConnectButton, getDefaultConfig } from '@rainbow-me/rainbowkit';
import { hardhat } from 'wagmi/chains';

const config = getDefaultConfig({
  appName: 'Confidential Poker Demo',
  projectId: 'YOUR_PROJECT_ID', // You can put any string here, it's only for RainbowKit
  chains: [hardhat],
  // Disable analytics to avoid the optional MetaMask SDK warning
  enableAnalytics: false,
});

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <div
            className="App"
            style={{
              textAlign: 'center',
              padding: '50px',
              background: '#111',
              color: '#fff',
              minHeight: '100vh',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>
              Confidential Poker Demo
            </h1>
            <p style={{ fontSize: '20px', marginBottom: '40px' }}>
              Private encrypted hole cards using Zama fhEVM — hidden hands on-chain!
            </p>

            <ConnectButton />

            <div style={{ marginTop: '60px' }}>
              <button
                style={{
                  padding: '20px 40px',
                  fontSize: '24px',
                  margin: '20px',
                  background: '#0f8',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: 'pointer',
                }}
              >
                Join Game
              </button>

              <button
                style={{
                  padding: '20px 40px',
                  fontSize: '24px',
                  margin: '20px',
                  background: '#50f',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: 'pointer',
                }}
              >
                Submit Private Hole Cards
              </button>
            </div>

            <p style={{ marginTop: '60px', fontSize: '18px', color: '#aaa' }}>
              Demo for Zama Developer Program Builder Track — contract with private euint8 cards deployed locally.
            </p>
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;