const productLog = {
  def: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  createTime: {
    type: Date,
    index: { name: "createTime" }
  },
  major: { type: String, index: { name: "major" } },
  minor: { type: String, index: { name: "minor" } },
  productID: String,
  productName: { type: String, index: { name: "productName" } },
  hospital: String,
  unit: String,
  inOut: String,
  detail: String,
  previousAmount: Number,
  changedAmount: Number,
  changedCnt: Number,
  staffName: String,
  remarks: String,
  retailPrice: Number,
  manufacture: String,
  expire: [
    {
      expireDate: Number,
      expireThirtySoon: Boolean,
      expireCount: Number
    }
  ]
};

export default productLog;
