const managerlog = {
  id: { type: String, hashKey: true },
  hospitalId: String,
  date: { type: Date, index: { name: "date" } },
  token: { type: String, index: { name: "token" } },
  ip: String,
  manager: String,
  managerName: String,
  category: String,
  key: String,
  action: String,
  args: Object,
  log: {
    contents: String
  }
};

export default managerlog;
