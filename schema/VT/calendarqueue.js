const calendarQueue = {
  id: { type: String, hashKey: true },
  createTime: {
    type: Date,
    index: { name: "createTime" }
  },
  method: { type: String },
  params: {
    requestBody: {
      summary: String,
      end: Object,
      start: Object,
      description: String
    },
    calendarId: String,
    eventId: String,
    staff: {
      hospitalId: String,
      staffId: String,
      isSyncing: Boolean
    }
  },
  reservation: {
    id: String,
    hospitalId: String
  }
};

export default calendarQueue;
