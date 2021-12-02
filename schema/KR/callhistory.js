const callhistory = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  date: { type: Date, index: { name: "date" } },
  patients: { type: "list", list: [String] },
  phoneNumber: String,
  status: String,
  memo: String,
  createTime: {
    type: Date,
    index: { name: "createTime" }
  }
};

export default callhistory;
