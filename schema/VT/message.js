const message = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  createTime: {
    type: Date,
    index: { name: "createTime" }
  },
  sessionId: { type: String, index: { name: `sessionId` } },
  srcId: String,
  dstId: String,
  srcName: String,
  message: String,
  read: { type: Number, index: { name: `read` } }
};

export default message;
