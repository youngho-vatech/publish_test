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
    address: String, //todo 삭제
    detailAddress: String, //todo 삭제
    location: {
      address: String,
      coordinate: {
        latitude: Number,
        longitude: Number
      },
      detailAddress: String,
      placeId: String
    },
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
    index: { name: "createTime" }
  },
  subscription: [
    {
      id: String,
      term: Number,
      startDate: Date,
      endDate: Date,
      paymentCheck: Boolean
    }
  ],
  migrationComplete: Boolean,
  terminateComplete: Boolean,
  termination: {
    reason: [
      {
        key: String,
        isChecked: Boolean
      }
    ],
    reasonForSwitchingAnotherService: [
      {
        key: String,
        isChecked: Boolean
      }
    ],
    detailedReason: String,
    feedBack: String
  },
  backupLinks: {
    emailSendingComplete: Boolean,
    photo: {
      url: String,
      createdAt: Date,
      expiredAt: Date
    },
    data: {
      url: String,
      createdAt: Date,
      expiredAt: Date
    }
  },
  featureSettings: {
    zaloOrWhatsApp: Boolean,
    labOrder: Boolean,
    InventoryManagement: Boolean,
    HR: Boolean
  }
};
export default hospital;
