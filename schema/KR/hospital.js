const hospital = {
  id: { type: String, hashKey: true },
  hospitalId: String,
  info: {
    hospitalName: String,
    userId: String,
    userName: String,
    birthDate: Number,
    cellPhoneNumber: String,
    businessLicenseNumber: String,
    phoneNumber: String,
    nursingInstitutionNumber: String,
    postCode: String,
    address: String,
    detailAddress: String,
    pastClaimSoftware: String,
    needMigration: Boolean,
    hospitalType: String,
    viewerType: String,
    email: String,
    idNumber: String
  },
  cms: {
    requesterName: String,
    transferStartDate: Number,
    accountOwnerName: String,
    accountOwnerBirthDate: Number,
    accountNumber: String,
    accountBank: String,
    accountOwnerType: String,
    phoneNumber: String
  },
  approval: {
    status: String,
    date: { type: Date },
    approvalDate: { type: Date },
    signOutDate: { type: Date }
  },
  config: { status: String, date: { type: Date } },
  service: {
    status: String,
    date: { type: Date }
  },
  dur: { mode: Number },
  cid: { mode: Number },
  sms: { mode: Number },
  aws: { mode: Number },
  aes: { iv: String, key: String },
  createTime: {
    type: Date,
    rangeKey: true
  },
  migrationComplete: Boolean,
  terminateComplete: Boolean,
  termination: {
    reason: [String],
    reasonForSwitchingAnotherService: [String],
    detailedReason: String,
    feedBack: String
  }
};
export default hospital;
