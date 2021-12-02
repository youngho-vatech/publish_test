const notice = {
  id: { type: String, hashKey: true },
  title: String,
  link: String,
  content: String,
  createTime: {
    type: Date,
    index: { name: "createTime" }
  },
  lastModifiedTime: Number,
  manager: String,
  isVisible: Boolean
};

export default notice;
