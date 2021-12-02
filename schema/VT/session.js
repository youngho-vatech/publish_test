const session = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  srcId: String,
  dstId: String,
  createTime: {
    type: Date,
    index: { name: "createTime" }
  }
};

export default session;
