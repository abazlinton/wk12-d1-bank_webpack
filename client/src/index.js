var Bank = require('./bank/bank.js');
var Account = require('./bank/account.js');
var sampleAccounts = require('./sample.json');
var BankView = require('./views/bank_view.js');

window.onload = function() {
  var testBank = new Bank();

  if ( localStorage.getItem("accounts") != undefined ){
    accounts = JSON.parse(localStorage.getItem("accounts"));
  } else {
    accounts = sampleAccounts;
  };

  for(account of accounts) {
    testBank.addAccount(new Account(account));
  }
  var bankView = new BankView(testBank);
  bankView.draw();
};
