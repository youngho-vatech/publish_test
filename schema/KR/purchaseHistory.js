const purchaseHistory = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  type: String,
  code: String,
  name: {
    type: String,
    index: { name: "name" }
  },
  purchaseStore: String,
  purchaseDate: {
    type: Date,
    index: { name: "purchaseDate" }
  },
  importOffice: String,
  manufacturer: String,
  nameWithoutSpace: String,
  numberOfClaims: Number,
  numberOfReports: Number,
  numberOfStock: Number,
  prePayment: Boolean,
  purchaseAmount: Number,
  purchaseCount: Number,
  purchaseLicense: String,
  purchaseUnit: Number,
  standard: String,
  unit: String,
  useContinue: Boolean,
  claimType: String,
  expired: Boolean,
  createTime: {
    type: Date,
    index: { name: "createTime" }
  }
};

export default purchaseHistory;
