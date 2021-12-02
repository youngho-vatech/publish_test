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
      patient: String,
      staff: String,
      timeSpent: Number,
      treatRoom: String
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
  color: String,
  createTime: {
    type: Date,
    index: { name: "createTime" }
  },
  google: {
    sync: Boolean,
    eventId: String,
    created: Date,
    updated: Date
  }
};

export default reservation;
