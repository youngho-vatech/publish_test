const managerlog = {
  id: { type: String, hashKey: true },
  hospitalId: String,
  logType: { type: String, index: { name: "logType" } },
  date: { type: Date, index: { name: "date" } },
  token: { type: String, index: { name: "token" } },
  ip: String,
  manager: String,
  managerName: String,
  category: { type: String, index: { name: "category" } },
  key: String,
  action: String,
  args: Object,
  log: {
    contents: String
  }
};

export default managerlog;
