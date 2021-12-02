const connectionlogledger = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  date: { type: Date, index: { name: "date" } },
  checkedDateBegin: {
    type: Date
  },
  checkedDateEnd: {
    type: Date
  },
  count: Number,
  signature: { contents: String },
  signatureStaff: String,
  token: { type: "list", list: [String] },
  createTime: {
    type: Date,
    index: { name: "createTime" }
  }
};

export default connectionlogledger;
