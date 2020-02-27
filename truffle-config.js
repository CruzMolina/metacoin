var HDWalletProvider = require("truffle-hdwallet-provider");
require('dotenv').config()

module.exports = (() => {
  return {
    // Uncommenting the defaults below 
    // provides for an easier quick-start with Ganache.
    // You can also follow this format for other networks;
    // see <http://truffleframework.com/docs/advanced/configuration>
    // for more details on how to specify configuration options!
    /**/
    networks: {
      //    development: {
      //      host: "127.0.0.1",
      //      port: 7545,
      //      network_id: "*"
      //    },
      test: {
        host: "127.0.0.1",
        port: 7545,
        network_id: "*",
      },
      ropsten: {
        provider: function () {
          return new HDWalletProvider(process.env.MNEMONIC, "https://ropsten.infura.io/v3/" + process.env.API_KEY)
        },
        network_id: 3,
        gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
      },
      rinkeby: {
        provider: function () {
          return new HDWalletProvider(process.env.MNEMONIC, "https://rinkeby.infura.io/v3/" + process.env.API_KEY);
        },
        network_id: 4,
        gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
      },
      kovan: {
        provider: function () {
          return new HDWalletProvider(process.env.MNEMONIC, "https://kovan.infura.io/v3/" + process.env.API_KEY);
        },
        network_id: 42,
        gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
      },
      goerli: {
        provider: () => {
          return new HDWalletProvider(process.env.MNEMONIC, 'https://goerli.infura.io/v3/' + process.env.API_KEY)
        },
        network_id: '5', // eslint-disable-line camelcase
        gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
      },
    },
  };
})();
