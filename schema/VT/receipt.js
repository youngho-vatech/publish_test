const receipt = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  doctor: String,
  lastModifiedStaff: String,
  lastModifiedTime: Number,
  newOrExistingPatient: String,
  patient: { type: String, index: { name: "patient" } },
  receiptDate: {
    type: Date,
    index: { name: "receiptDate" }
  },
  reservationDate: { type: Date },
  staff: String,
  status: String,
  createTime: {
    type: Date,
    index: { name: "createTime" }
  }
};

export default receipt;
