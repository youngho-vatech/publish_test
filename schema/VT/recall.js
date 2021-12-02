const recall = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  patient: String,
  type: Boolean,
  date: String,
  status: Object,
  write: String,
  autoSms: Object,
  result: Object
};

export default recall;
