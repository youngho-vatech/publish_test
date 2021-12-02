const log = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  date: { type: Date, index: { name: "date" } },
  token: { type: String, index: { name: "token" } },
  ip: String,
  staff: String,
  staffName: String,
  category: String,
  key: String,
  action: String,
  args: Object,
  log: {
    category: String,
    patient: String,
    contents: String,
    staff: String,
    paymentState: String,
    paymentAmount: Number,
    paymentDate: { type: Date },
    insuranceType: String,
    details: String
  },
  check: Boolean
};

export default log;
