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
  expenses: [
    {
      items: String,
      amount: String,
      description: String
    }
  ],
  lastModifiedStaff: String,
  lastModifiedTime: Number
};

export default moneymanagement;
