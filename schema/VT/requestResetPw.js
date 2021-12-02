const requestResetPw = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  userId: String,
  loginId: String,
  isReset: Boolean,
  createTime: {
    type: Date,
    index: { name: "createTime" }
  },
  expriyDate: Date
};

export default requestResetPw;
