## Installation<br>
Make sure you have install "Ganache" for free Ether<br><br>
To clone the repository used command<br><br>
git clone https://github.com/rushikesh1662002/Blockchain <br><br><br>
After you cloned the repository, you want to install the packages using<br>
---script---<br>
npm install
```
Then you want to create .env file and pass the "Private address"of your metamask account.

You first need to compile the contract and upload it to the blockchain network. Run the following commands to compile and upload the contract.<br>

---script----
npx hardhat compile
npx hardhat run --network local scripts/deploy.js
```
After deploying successful you want to add contract address in -> Constant/constant.js file

Once the contract is uploaded to the blockchain, copy the contract address and copy it in the .env file. You can also use another blockchain by writing the blockchain's endpoint in hardhat-config.

Once you have pasted your private key and contract address in the .env file, simply run command <br>
---script---<br>
npm start<br>
```
Author ~ Rushikesh Patil
