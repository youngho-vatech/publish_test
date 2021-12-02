const staff = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  accountHolder: String,
  accountNumber: String,
  address: String,
  birthDate: String,
  cellphoneNumber: String,
  charge: String,
  consentTo3rdPartyAgreement: Boolean,
  department: String,
  detailAddress: String,
  jobPosition: String,
  jobType: String,
  joiningDate: String,
  lastModifiedStaff: String,
  lastModifiedTime: Number,
  licenseNumber: String,
  loginId: String,
  loginPassword: String,
  loginPasswordDate: { type: Date },
  loginPasswordSalt: String,
  lunarBirth: Boolean,
  name: { type: String, index: { name: "name" } },
  payBank: String,
  permission: String,
  personalInformationAgreement: Boolean,
  postCode: String,
  radiologist: Boolean,
  residentRegistrationNumber: String,
  retirementDate: String,
  stamp: String,
  status: String,
  telephoneNumber: String,
  workingForm: String,
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
  ]
};

export default staff;
