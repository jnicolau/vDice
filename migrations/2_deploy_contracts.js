//var oraclizeI = artifacts.require("./OraclizeI");
//var ConvertLib = artifacts.require("./ConvertLib.sol");
//var MetaCoin = artifacts.require("./MetaCoin.sol");

var VDice = artifacts.require("./Dice");

module.exports = function(deployer) {

  var pwin = 5000; // probability of winning (10000 = 100%)
  var edge = 200; // edge percentage (10000 = 100%)
  var maxWin = 100; //max win (before edge is taken) as percentage of bankroll (10000 = 100%)
  var minBet = 1 // min bet in finneys;
  var maxInvestors = 5; //maximum number of investors
  var houseEdge = 50; //edge percentage (10000 = 100%)
  var divestFee = 50; //divest fee percentage (10000 = 100%)
  var emergencyWithdrawalRatio = 90; //ratio percentage (100 = 100%)
  
  // Convert min bet from finneys to weis
  var minBetInWei = web3.toWei(minBet, "finney");

  deployer.deploy(VDice, pwin, edge, minBetInWei, maxWin, minBet, 
    maxInvestors, houseEdge, divestFee, emergencyWithdrawalRatio, {gas: 6000000}); // {gas: 900000000000}
};
