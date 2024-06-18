function createAccount(initialPin, amount = 0) {
  let pin = initialPin;
  let balance = amount;

  return {
    deposit: function (inputPin, dAmount) {
      if (inputPin === pin) {
        balance += dAmount;
        return `Succesfully deposited $${dAmount}. Current balance: $${balance}.`;
      } else {
        return "Invalid PIN.";
      }
    },

    checkBalance: function (inputPin) {
      if (inputPin === pin) {
        return `$${balance}`;
      } else {
        return "Invalid PIN.";
      }
    },

    withdraw: function (inputPin, wAmount) {
      if (inputPin === pin) {
        if (wAmount <= balance) {
          balance -= wAmount;
          return `Succesfully withdrew $${wAmount}. Current balance: $${balance}.`;
        } else {
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        }
      } else {
        return "Invalid PIN.";
      }
    },

    changePin: function (inputPin, newPin) {
      if (inputPin === pin) {
        pin = newPin;
        return "PIN successfully changed!";
      } else {
        return "Invalid PIN.";
      }
    }
  };
}

module.exports = { createAccount };
