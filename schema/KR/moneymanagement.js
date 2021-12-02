const moneymanagement = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  date: { type: Date, index: { name: "date" } },
  balance: String,
  totalIncome: String,
  totalExpenses: String,
  carryOverIncome: {
    items: String,
    amount: String
  },
  medicalPayment: {
    items: String,
    amount: String
  },
  passbookWithdrawal: {
    items: String,
    amount: String
  },
  otherIncome: {
    items: String,
    amount: String
  },
  mealExpense: {
    items: String,
    amount: String
  },
  fixtureExpense: {
    items: String,
    amount: String
  },
  passbookDeposit: {
    items: String,
    amount: String
  },
  otherExpenses: {
    items: String,
    amount: String
  },
  lastModifiedStaff: String,
  lastModifiedTime: Number
};

export default moneymanagement;
