import moment from "moment";

const cyberCert = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, require: true },
  certificate: { type: String, default: "" },
  appId: { type: String, default: "" },
  password: { type: String, default: "" },
  priKey: { type: String, default: "" },
  pubKey: { type: String, default: "" },
  registDate: {
    type: Date,
    get: value => moment.utc(value * 1000).unix()
  },
  staff: { type: String, rangeKey: true },
  validDate: {
    type: Date,
    get: value => moment.utc(value * 1000).unix()
  },
  createTime: {
    type: Date,
    get: value => moment.utc(value * 1000).unix()
    // index: { name: "createTime" },
  },
  customerTaxNumber: String,
  customerName: String,
  customerAddress: String,
  serial: String,
  certBegin: Number,
  certEnd: Number,
  lastModifiedTime: Date,
  lastModifiedStaff: String
};

export default cyberCert;
