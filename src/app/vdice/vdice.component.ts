import {Component, OnInit} from '@angular/core';
import {Web3Service} from '../util/web3.service';

@Component({
  selector: 'vdice',
  templateUrl: './vdice.component.html',
  styleUrls: ['./vdice.component.css']
})
export class VDiceComponent implements OnInit {
  accounts: string[];
  vdice: Promise<any>;

  model = {
    amount: 5,
    receiver: '',
    balance: 0,
    account: '',
    status: null,
  };

  status = '';
  statusObject: any;

  constructor(private web3Service: Web3Service) {
    console.log('Constructor: ' + web3Service);
  }

  ngOnInit(): void {
    console.log('OnInit: ' + this.web3Service);
    console.log(this);
    this.watchAccount();
    this.vdice = new Promise((resolve, reject) => {
      setInterval(() => {
        if (this.web3Service.ready) {
          resolve(this.web3Service.VDice);
        }
      }, 100);
    });
  }

  watchAccount() {
    this.web3Service.accountsObservable.subscribe((accounts) => {
      this.accounts = accounts;
      this.model.account = accounts[0];
      this.refreshBalance();
      //this.refreshStatus();
    });
  }

  setStatus(status) {
    this.status = status;
  }

  sendCoin() {
    if (!this.vdice) {
      this.setStatus('VDice is not loaded, unable to send transaction');
      return;
    }

    const amount = this.model.amount;
    const receiver = this.model.receiver;

    console.log('Sending coins' + amount + ' to ' + receiver);

    this.setStatus('Initiating transaction... (please wait)');

    this.vdice.then((contract) => {
      return contract.deployed();
    }).then((vDiceInstance) => {
      return vDiceInstance.sendCoin.sendTransaction(receiver, amount, {from: this.model.account});
    }).then((success) => {
      if (!success) {
        this.setStatus('Transaction failed!');
      } else {
        this.setStatus('Transaction complete!');
      }
    }).catch((e) => {
      console.log(e);
      this.setStatus('Error sending coin; see log.');
    });
  }

  refreshBalance() {
    console.log('Refreshing balance');
    var me = this;
    this.vdice.then((contract) => {
      return contract.deployed();
    }).then((vDiceInstance) => {
      return vDiceInstance.getBalance.call(this.model.account);
    }).then((value) => {
      console.log('Found balance: ' + value);
      this.model.balance = value.valueOf();
    }).catch(function (e) {
      console.log(e);
      me.setStatus('Error getting balance; see log.');
    });
  }

  refreshStatus() {
    console.log('Refreshing status');
    var me = this;
    this.vdice.then((contract) => {
      return contract.deployed();
    }).then((vDiceInstance) => {
      return vDiceInstance.getStatus.call(this.model.account);
    }).then((value) => {
      console.log('Found status: ' + value);
      this.model.status = value.valueOf();
    }).catch(function (e) {
      console.log(e);
      me.setStatus('Error getting status; see log.');
    });
  }

  clickAddress(e) {
    this.model.account = e.target.value;
    this.refreshBalance();
  }

  setAmount(e) {
    console.log('Setting amount: ' + e.target.value);
    this.model.amount = e.target.value;
  }

  setReceiver(e) {
    console.log('Setting receiver: ' + e.target.value);
    this.model.receiver = e.target.value;
  }

}
