const url = "https://eth-mainnet.alchemyapi.io/v2/0uHogRAR7T_uSGpVKDddgiZP0UCGXa4t";

// Using web3js
const web3 = new Web3(url);

// Using ethers.js
const provider =
    new ethers.providers.JsonRpcProvider(url);
const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config()
const { API_URL, MNEMONIC } = process.env;
module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*", // Match any network id
            gas: 5000000
        },
        ropsten: {
            provider: function() {
                return new HDWalletProvider(MNEMONIC, API_URL)
            },
            network_id: 3
        }

    },
    compilers: {
        solc: {
            settings: {
                optimizer: {
                    enabled: true, // Default: false
                    runs: 200 // Default: 200
                },
            }
        }
    }
};