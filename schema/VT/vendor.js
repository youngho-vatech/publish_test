const vendor = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  vendorName: { type: String, index: { name: "vendorName" } },
  email: String,
  phone: String,
  taxCode: String,
  address: String,
  bank: String,
  accountNumber: String,
  director: String,
  cellNumber: String,
  bizno: String,
  idNumber: { type: String, index: { name: "idNumber" } },
  createTime: { type: Date, index: { name: "createTime" } }
};

export default vendor;
