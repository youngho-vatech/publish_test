const lab = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  target: String,
  name: String,
  email: String,
  phoneNumber: String,
  faxNumber: String,
  businessLicenseNumber: String,
  postCode: String,
  address: String,
  detailAddress: String,
  bank: String,
  bankAccountNumber: String,
  accountHolder: String,
  ceoName: String,
  ceoPhoneNumber: String,
  settlementDate: Number,
  tradingStatus: String,
  createTime: {
    type: Date,
    index: { name: "createTime" }
  }
};

export default lab;
