const memo = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  createTime: {
    type: Date,
    index: { name: "createTime" }
  },
  memo: String
};

export default memo;
