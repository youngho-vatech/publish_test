const staff = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  address: String,
  birthDate: { type: Date },
  cellphoneNumber: String,
  charge: String,
  consentTo3rdPartyAgreement: Boolean,
  jobPosition: String,
  jobType: String,
  joiningDate: { type: Date },
  lastModifiedStaff: String,
  lastModifiedTime: Number,
  loginId: String,
  loginPassword: String,
  loginPasswordDate: { type: Date },
  loginPasswordSalt: String,
  name: { type: String, index: { name: "name" } },
  permission: String,
  personalInformationAgreement: Boolean,
  collectUserPersonalData: Boolean,
  retirementDate: { type: Date },
  status: String,
  telephoneNumber: String,
  createTime: {
    type: Date,
    index: { name: "createTime" }
  },
  isDeleted: Boolean,
  failCnt: Number,
  initPassword: Boolean,
  passwordHistory: [
    {
      password: String,
      date: { type: Date },
      salt: String
    }
  ],
  zaloId: String,
  googleCalendar: {
    googleCalendarId: String,
    summary: String,
    timeZone: String,
    email: String,
    synchronizationDate: {
      type: Date
    },
    isLinked: Boolean,
    createTime: {
      type: Date
    },
    updateTime: {
      type: Date
    },
    isSyncing: Boolean
  }
};

export default staff;
