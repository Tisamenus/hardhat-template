import 'dotenv/config'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'

import 'hardhat-spdx-license-identifier'
import 'hardhat-storage-layout'
import 'hardhat-log-remover'
import 'hardhat-contract-sizer'

import { HardhatUserConfig } from 'hardhat/types/config'
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.6.12',
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: '0.8.7',
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: '0.7.6',
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {
      forking: {
        url: `https://mainnet.infura.io/v3/${process.env.mainnet_rpc_key}`,
        //        blockNumber: 13211966,
      },
      initialBaseFeePerGas: 5,
      loggingEnabled: false,
      allowUnlimitedContractSize: false,
    },
    localhost: {
      url: 'http://localhost:8545',
      timeout: 120000,
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.mainnet_rpc_key}`,
      accounts: [`${process.env.mainnet_account_pk}`],
      timeout: 2147483647,
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.goerli_rpc_key}`,
      accounts: [`${process.env.goerli_account_pk}`],
      timeout: 2147483647,
    },
  },
  mocha: { timeout: 9999999999 },
  spdxLicenseIdentifier: {
    overwrite: true,
    runOnCompile: true,
  },
  typechain: {
    outDir: 'types',
    target: 'ethers-v5',
  },
  etherscan: {
    apiKey: `${process.env.etherscan_api_key}`,
  },
}
export default config
