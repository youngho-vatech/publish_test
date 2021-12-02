const noticeBoard = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  content: String,
  createTime: { type: Date, index: { name: "createTime" } }
};

export default noticeBoard;
