//https://truffle.readthedocs.io/en/beta/getting_started/contracts/
//https://github.com/trufflesuite/truffle-contract
//https://ethereum.stackexchange.com/questions/29449/how-to-pass-argument-parameter-to-a-payable-function-of-a-contract-that-has-been
// MyContract.defaults({
//   from: ...,
//   gas: ...,
//   gasPrice: ...,
//   value: ...
// })

var Dice = artifacts.require("./Dice.sol");

contract('Dice', function(accounts) {
  it("test access to balance", function() {
    return Dice.deployed().then(function(instance) {
      // Contract details
      //console.log(instance);
      
      // console.log("Account 0 Balance: " + web3.eth.getBalance(accounts[0]));
      // console.log("Account 1 Balance: " + web3.eth.getBalance(accounts[1]));
      // console.log("Account 2 Balance: " + web3.eth.getBalance(accounts[2]));
      // console.log("Account 49 Balance: " + web3.eth.getBalance(accounts[49]));
      //instance.deposit(myData, {value: 100, from: myAccount});
      return instance.newInvestor({value: 100, from: accounts[1]});
    })
    .then(function(value) {
        console.log("Created new investor");
        console.log(value);
        // return instance.getMaxBetAmount.call().then(function(value){
        //   console.log("Max Bet Amount:" + value);
        // });  
    }).then(function(value) {
      //assert.equal(value.valueOf(), 10000, "10000 wasn't in the first account");
    });
  });

});
