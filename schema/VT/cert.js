const cert = {
  hospitalId: { type: String, hashKey: true },
  certInfo: String,
  password: String,
  priKey: String,
  pubKey: String,
  registDate: {
    type: Date
  },
  staff: { type: String, rangeKey: true },
  validDate: {
    type: Date
  },
  createTime: {
    type: Date,
    index: { name: "createTime" }
  },
  appId: String
};

export default cert;
