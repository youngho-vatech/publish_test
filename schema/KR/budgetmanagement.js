const budgetmanagement = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  date: { type: Date, index: { name: "date" } },
  actualExpenditure: String,
  budgetBalance: String,
  previousBudgetBalance: String,
  estimatedExpenditure: String,
  expenseList: {
    type: "list",
    list: [
      {
        details: String,
        item: String,
        paymentDate: Number,
        paymentStatus: Boolean,
        renewal: Boolean,
        value: String
      }
    ]
  },
  totalExpenditure: String,
  lastModifiedStaff: String,
  lastModifiedTime: Number,
  createTime: {
    type: Date,
    index: { name: "createTime" }
  }
};

export default budgetmanagement;
