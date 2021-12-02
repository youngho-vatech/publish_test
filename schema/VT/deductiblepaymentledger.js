const deductiblepaymentledger = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  date: { type: Date, index: { name: "date" } },
  checkedDateBegin: { type: Date },
  checkedDateEnd: { type: Date },
  count: Number,
  destructionStaff: String,
  signature: { contents: String },
  signatureStaff: String,
  createTime: {
    type: Date,
    index: { name: "createTime" }
  }
};

export default deductiblepaymentledger;
