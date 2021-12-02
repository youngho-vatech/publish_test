const photo = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  type: String,
  date: { type: Date, index: { name: "date" } },
  patient: { type: String, index: { name: "patient" } },
  content: {
    filetype: String,
    filename: String,
    fileattr: String,
    filenode: String,
    folder: String,
    object: String,
    source: String,
    thumbnail: String,
    opinion: String,
    content: String,
    region: String,
    issuer: String,
    detail: String,
    tags: String,
    target: String,
    tools: String
  },
  lastModifiedStaff: String,
  lastModifiedTime: Number,
  createTime: {
    type: Date,
    index: { name: "createTime" }
  }
};

export default photo;
