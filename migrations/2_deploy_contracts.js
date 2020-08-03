const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");

module.exports = asyncc function(deployer, accounts) {
  await deployer.deploy(ConvertLib);
  await deployer.link(ConvertLib, MetaCoin);
  await deployer.deploy(MetaCoin);
  
  metaCoinInstance = await MetaCoin.deployed();
  // test
  await metaCoinInstance.sendCoin(accounts[0], 100);
};
