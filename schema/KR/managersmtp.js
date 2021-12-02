const managersmtp = {
  id: { type: String, hashKey: true },
  host: String,
  port: Number,
  secure: Boolean, // true for 465, false for other ports
  auth: {
    user: String,
    pass: String
  },
  createTime: {
    type: Date,
    rangeKey: true
  }
};

export default managersmtp;
