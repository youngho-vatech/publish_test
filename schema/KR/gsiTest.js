const gsiTest = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  category: {
    type: String,
    index: { name: "category" }
  },
  contents: {
    type: String,
    index: { name: "contents" },
    globalIndex: { type: String, hashKey: "cdds" }
  },
  cdds: { type: String, globalIndex: { type: String, hashKey: "qwer" } },
  qwer: String,
  date: { type: Date, index: { name: "date" } }
};

export default gsiTest;
