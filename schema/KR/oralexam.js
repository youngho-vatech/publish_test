const oralexam = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  birthDate: Number,
  class: String,
  contractYear: Number,
  doctor: String,
  errorType: String,
  examDate: {
    type: Date,
    index: { name: "examDate" }
  },
  examType: String,
  fileGenerateDate: Number,
  fileState: String,
  grade: String,
  lastModifiedStaff: String,
  lastModifiedTime: Number,
  createTime: {
    type: Date,
    index: { name: "createTime" }
  },
  name: String,
  number: String,
  patient: String,
  receipt: String,
  receiptDate: {
    type: Date,
    index: { name: "receiptDate" }
  },
  schoolId: { type: String, index: { name: "schoolId" } },
  sex: String,
  status: String,
  type: String
};

export default oralexam;
