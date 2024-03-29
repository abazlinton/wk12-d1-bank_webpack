var Bank = function() {
  this.accounts = [];
};

Bank.prototype = {
  addAccount: function(account) {
    this.accounts.push(account);
  },
  findAccountByOwnerName:function(ownerName) {
    var foundAccount = null;
    for (account of this.accounts) {
      if(account.owner === ownerName) {
        foundAccount = account;
      }
    }
    return foundAccount;
  },
  filteredAccounts: function(type) {
    if(!type) return this.accounts;
    var filteredAccounts = [];
    for (account of this.accounts) {
      if(type === account.type)
        filteredAccounts.push(account);
    }
    return filteredAccounts;
  },
  totalCash:function(type) {
    var total = 0;
    for (account of this.filteredAccounts(type)) {
      total += account.amount;
    }
    return total;
  },
  accountAverage:function() {
    return this.totalCash()/this.accounts.length;
  },
  addInterest: function(rate){
    for(account of this.accounts){
      account.amount *= (1 + rate);
      // account.amount = account.amount.toFixed(2);
    };
  },
  save: function(){
    jsonAccounts = JSON.stringify(this.accounts);
    localStorage.setItem("accounts", jsonAccounts);
  }
};


module.exports = Bank;
