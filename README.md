## Installation

After you cloned the repository, you want to install the packages using
---script---
npm install
```
Then you want to create .env file and pass the "Private address"of your metamask account.

You first need to compile the contract and upload it to the blockchain network. Run the following commands to compile and upload the contract.<br>

---script----<br>
npx hardhat compile
npx hardhat run --network volta scripts/deploy.js
```
After deploying successful you want to add contract address in -> Constant/constant.js file

Once the contract is uploaded to the blockchain, copy the contract address and copy it in the .env file. You can also use another blockchain by writing the blockchain's endpoint in hardhat-config.

Once you have pasted your private key and contract address in the .env file, simply run command <br>
---script---<br>
npm start<br>
```
Author ~ Rushikesh Patil
