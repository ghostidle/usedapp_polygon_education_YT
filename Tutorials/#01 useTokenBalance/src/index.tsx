
import React from 'react'
import ReactDOM from 'react-dom'
import { Mainnet, DAppProvider } from '@usedapp/core'
import { App } from './App'
import { ChainId} from "@usedapp/core";

const config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: 'https://mainnet.infura.io/v3/fd2b81640ddc4e4c9ca0815160448868',
  },
}

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={{
        supportedChains: [ChainId.Polygon],
      }}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
