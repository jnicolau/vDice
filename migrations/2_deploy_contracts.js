var vDice = artifacts.require("./Dice");
//var oraclizeI = artifacts.require("./OraclizeI");
//var ConvertLib = artifacts.require("./ConvertLib.sol");
//var MetaCoin = artifacts.require("./MetaCoin.sol");

module.exports = function(deployer) {
  // deployer.deploy(ConvertLib);
  // deployer.link(ConvertLib, MetaCoin);
  // deployer.deploy(MetaCoin);
  //deployer.deploy(oraclizeI);
  ///deployer.link(oraclizeI, vDice);
  deployer.deploy(vDice);
};
