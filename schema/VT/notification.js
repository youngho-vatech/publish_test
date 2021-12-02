const notification = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  date: { type: Date, index: { name: "date" } },
  category: String,
  title: String,
  keyId: String,
  localeKey: String,
  localeArgs: [String],
  dateArgs: [Date]
};

export default notification;
