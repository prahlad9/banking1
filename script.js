function sendMoney() {
    var enterName = document.getElementById("enterName").value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value);
  
    if (enterAmount > 8000) {
      alert("Insufficient Balance.");
    }
    
    else {
      var findUserBankAccount = enterName + "BankBalance";
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerText) + enterAmount;
      var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount;
  
      if (myAccountBalance < 0) {
        alert("Insufficient Balance.");
        return; // Stop further execution if balance is insufficient.
      }
  
      document.getElementById("myAccountBalance").innerText = myAccountBalance;
      document.getElementById(findUserBankAccount).innerText = finalAmount;
  
      // Successful transaction alert
      alert(`Successful Transaction !! RS.${enterAmount} is sent to ${enterName}@email.com.`);
  
      // Transaction history
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`Rs. ${enterAmount} is sent to recipient with gmail-id ${enterName}@gmail.com.`);
      createPTag.appendChild(textNode);
  
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
    }
  }
  