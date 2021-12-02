const number = {
  hospitalId: { type: String, hashKey: true },
  chartIndex: Number,
  docIndex: Number,
  claimIndex: {
    healthInsurance: Number,
    medicalBenefit: Number
  },
  labIndex: Number,
  receiptIndex: Number,
  prescriptionIndex: Number,
  purchaseReportIndex: Number,
  materialSupplementRequestIndex: Number
};

export default number;
