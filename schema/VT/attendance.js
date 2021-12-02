const attendance = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  staffName: { type: String, index: { name: "staffName" } },
  staffId: String,
  startTime: { type: Date },
  endTime: { type: Date },
  breakTime: [
    {
      id: String,
      startBreakTime: { type: Date },
      endBreakTime: { type: Date },
      memo: String
    }
  ],
  occupation: String,
  createTime: {
    type: Date,
    index: { name: "createTime" }
  }
};

export default attendance;
