const LctPrice = artifacts.require("LctPrice");

module.exports = async function (deployer, network, accounts) {
  console.log("Deploying");

  // Deploy LTCExchange
  await deployer.deploy(LctPrice);
  await LctPrice.deployed();
};
