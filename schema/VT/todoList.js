const todoList = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  complete: Boolean,
  content: String,
  staffName: { type: String, index: { name: "staffName" } },
  staffId: String,
  dueTo: { type: Date, index: { name: "dueTo" } },
  createTime: { type: Date, index: { name: "createTime" } },
  lastModifiedTime: { type: Date, index: { name: "lastModifiedTime" } }
};

export default todoList;
