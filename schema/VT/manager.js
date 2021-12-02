const manager = {
  id: { type: String, hashKey: true },
  name: String,
  loginId: String,
  password: { key: String, salt: String, date: Number },
  createTime: {
    type: Date,
    index: { name: "createTime" }
  },
  failCount: Number,
  authLevel: String,
  initPassword: String
};

export default manager;
