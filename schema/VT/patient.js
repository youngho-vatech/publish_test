const patient = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  address: String,
  birthDate: {
    type: Date,
    index: { name: "birthDate" }
  },
  cellphoneNumber: String,
  chartNumber: { type: String, index: { name: "chartNumber" } },
  consentTo3rdPartyAgreement: Boolean,
  doctor: String,
  email: String,
  etcPaymentAmount: String,
  family: [{ patientId: String, relationship: String }],
  finalVisitingDate: {
    type: Date,
    index: { name: "finalVisitingDate" }
  },
  grade: String,
  lastModifiedStaff: String,
  lastModifiedTime: Number,
  createTime: Date,
  memo: String,
  findMemo: String,
  name: { type: String, index: { name: "name" } },
  newOrExistingPatient: String,
  paymentAmount: String,
  needPaymentAmount: String,
  personalInformationAgreement: Boolean,
  profileImage: String,
  recommender: String,
  recommenderInfo: [{ patientId: String, relationship: String, memo: String }],
  residentRegistrationNumber: String,
  sex: String,
  staff: String,
  telephoneNumber: String,
  tendency: String,
  visitingRoute: String,
  pastReservationStatus: String,
  nextReservationDate: { type: Date },
  latestPlStatus: String,
  customerGroupId: { type: "list", list: [String] },
  teeth: { type: "list", list: [Number] },
  identification: String
};

export default patient;
