const lab = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  target: String,
  name: String,
  email: String,
  phoneNumber: String,
  address: String,
  bank: String,
  bankAccountNumber: String,
  accountHolder: String,
  ceoName: String,
  ceoPhoneNumber: String,
  settlementDate: Number,
  tradingStatus: String,
  taxCode: String,
  createTime: {
    type: Date,
    index: { name: "createTime" }
  }
};

export default lab;
