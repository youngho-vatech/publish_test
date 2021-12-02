const paymenthistory = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  date: { type: Date, index: { name: "date" } },
  payment: { type: String, index: { name: "payment" } },
  account: Number,
  card: Number,
  cash: Number,
  pay: Boolean,
  memo: String,
  refund: Boolean,
  staff: String,
  prePaid: Number,
  prePaidId: String
};

export default paymenthistory;
