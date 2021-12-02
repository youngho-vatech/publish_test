const reservation = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  allDayLong: Boolean,
  content: {
    hospital: {
      important: Boolean,
      category: String,
      staff: { custom: Boolean, value: String },
      title: String
    },
    laboratory: {}, // TODO: define
    patient: {
      doctor: String,
      name: String,
      newOrExistingPatient: Boolean,
      next: [{ selectedTeeth: [Number], cc: String }],
      oralExam: Boolean,
      patient: String,
      staff: String,
      timeSpent: Number
    }
  },
  dateBegin: {
    type: Date,
    index: { name: "dateBegin" }
  },
  dateEnd: {
    type: Date,
    index: { name: "dateEnd" }
  },
  groupId: String,
  lastModifiedStaff: String,
  lastModifiedTime: Number,
  note: String,
  phoneNumber: String,
  status: String,
  patient: { type: String, index: { name: "patient" } },
  type: { type: String, index: { name: "type" } },
  createTime: {
    type: Date,
    index: { name: "createTime" }
  }
};

export default reservation;
