const docissue = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  category: { type: String, index: { name: "category" } },
  contents: Object,
  date: { type: Date, index: { name: "date" } },
  doctor: String,
  issueNumber: String,
  lastModifiedStaff: String,
  lastModifiedTime: Number,
  name: String,
  oralexam: String,
  patient: String,
  purpose: { type: String, index: { name: "purpose" } },
  staff: String,
  status: Number,
  type: { type: String, index: { name: "type" } },
  signature: {
    contents: String
  },
  createTime: {
    type: Date,
    index: { name: "createTime" }
  }
};

export default docissue;
