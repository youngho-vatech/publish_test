const productLog = {
  def: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  createTime: {
    type: Date,
    index: { name: "createTime" }
  },
  major: { type: String, index: { name: "major" } },
  minor: { type: String, index: { name: "minor" } },
  productName: { type: String, index: { name: "productName" } },
  hospital: String,
  unit: String,
  inOut: String,
  detail: String,
  previousAmount: Number,
  changedAmount: Number,
  changedCnt: Number,
  staffName: String
};

export default productLog;
