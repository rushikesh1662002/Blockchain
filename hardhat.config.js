require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
//require("@nomicfoundation/hardhat-toolbox");
//require("@nomiclabs/hardhat-waffle");

const { PRIVATE_KEY } = process.env;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
   localhost: {
      url: "HTTP://127.0.0.1:7545",
      chainId:1337,
      accounts: [PRIVATE_KEY],
    },
  },
  // Other Hardhat configuration options...
};
