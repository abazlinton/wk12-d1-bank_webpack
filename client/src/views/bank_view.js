var BankView = function(bank){
  this.bank = bank;
};

BankView.prototype = {

  draw: function(){

    var button10percent = document.getElementById('button-10percent');
    button10percent.onclick = this.add10PercentToAmounts();
    var buttonSave = document.getElementById('button-save');
    buttonSave.onclick = this.save();

    var totalDisplay = document.getElementById('total');
    var businessTotalDisplay = document.getElementById('business-total');
    var personalTotalDisplay = document.getElementById('personal-total');

    totalDisplay.innerText = "Total: £" + this.bank.totalCash().toFixed(2);
    businessTotalDisplay.innerText = "Total Business: £" + this.bank.totalCash('business').toFixed(2);
    personalTotalDisplay.innerText = "Total Personal: £" + this.bank.totalCash('personal').toFixed(2);

    var businessAccountList = document.getElementById('business-accounts');
    var personalAccountList = document.getElementById('personal-accounts');

    businessAccountList.innerHTML = "";
    personalAccountList.innerHTML = "";

    this.populateAccountList(businessAccountList, this.bank.filteredAccounts('business'));
    this.populateAccountList(personalAccountList, this.bank.filteredAccounts('personal'));

  },

  createItemForAccount: function(account) {
    var accountListItem = document.createElement('li');
    accountListItem.innerText = account.owner + ": £" + account.amount.toFixed(2);
    return accountListItem;
  },

  populateAccountList: function(listElement, accounts) {
    for(account of accounts) {
      listElement.appendChild(this.createItemForAccount(account));
    };
  },

  add10PercentToAmounts: function(){
    return function(){
      this.bank.addInterest(0.1);
      this.draw();
    }.bind(this);
  },

  save: function(){
    return function(){
      this.bank.save();
    }.bind(this);
  }

};

module.exports = BankView;
