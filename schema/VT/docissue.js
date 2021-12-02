const docissue = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  contents: Object,
  date: { type: Date, index: { name: "date" } },
  doctor: String,
  issueNumber: String,
  lastModifiedStaff: String,
  lastModifiedTime: Number,
  name: String,
  patient: String,
  staff: String,
  status: Number,
  type: { type: String, index: { name: "type" } },
  signature: {
    contents: String,
    status: String,
    staff: String
  },
  createTime: {
    type: Date,
    index: { name: "createTime" }
  }
};

export default docissue;
