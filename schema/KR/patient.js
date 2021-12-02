const patient = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  address: String,
  birthDate: { type: String, index: { name: "birthDate" } },
  bname: String,
  callName: String,
  cellphoneNumber: String,
  cellphoneNumber2: String,
  chartNumber: { type: String, index: { name: "chartNumber" } },
  consentTo3rdPartyAgreement: Boolean,
  detailAddress: String,
  disability: Boolean,
  doctor: String,
  email: String,
  errorments: { type: "list", list: [String] },
  etcPaymentAmount: String,
  family: [{ patientId: String, relationship: String }],
  finalVisitingDate: {
    type: Date,
    index: { name: "finalVisitingDate" }
  },
  grade: String,
  insurance: {
    qlfType: String, // 자격여부
    sujinjaJuminNm: String, // 수진자성명
    sujinjaJuminNo: String, // 수진자 주민등록번호
    sedaejuNm: String, // 세대주성명
    qlfChwidukDt: String, // 자격취득일자
    payRestricDt: String, // 자격상실일자
    protAdminSym: String, // 보장기관기호
    asylmSym: String, // 건강보험증번호
    sbrdnType: String, // 본인부담여부
    qlfRestrictCd: String, // 급여제한여부
    dentTop: String, // 노인틀니 대상자(상악)
    dentBottom: String, // 노인틀니 대상자(하악)
    dentImpl1: String, // 임플란트 대상자정보1
    dentImpl2: String, // 임플란트 대상자정보2
    obstYn: String, // 장애여부
    cfhcRem: String, // 건장생활유지비 잔액
    ykiho1: String, //선택기관기호1(관할지사코드)
    ykiho2: String, //선택기관기호2
    ykiho3: String, //선택기관기호3
    ykiho4: String, //선택기관기호4
    yoyangNm1: String, //선택기관 이름1(관할지사명)
    yoyangNm2: String, //선택기관 이름2
    yoyangNm3: String, //선택기관 이름3
    yoyangNm4: String, //선택기관 이름4
    dprtYn: String, // 출국자 여부
    disRegPrson3: String, // 차상위대상자
    ntntType: String, // 국적구분
    disRegPrson2: String, // 산정특례(희귀질환)등록대상자
    disRegPrson4: String, // 산정특례(암)등록대상자1
    disRegPrson5: String, // 산정특례(화상)등록대상자
    disRegPrson9: String, // 산정특례(결핵)등록대상자
    disRegPrson12: String, // 요양기관별 산정특례(결핵)등록대상자
    disRegPrson13: String, // 산정특례(중복암)등록대상자2
    disRegPrson14: String, // 산정특례(중복암)등록대상자3
    disRegPrson15: String, // 산정특례(중복암)등록대상자4
    disRegPrson16: String, // 산정특례(중복암)등록대상자5
    disRegPrson17: String, // 산정특례(중증치매)등록대상자
    disRegPrson18: String, // 산정특례(중증난치질환)등록대상자
    disRegPrson10: String, // 산정특례(극희귀)등록대상자
    disRegPrson11: String, // 산정특례(상세불명희귀)등록대상자
    disRegPrson19: String, // 산정특례(기타염색체 이상질환)등록대상자
    preInfant: String, // 조산아 및 저체중출생아 등록대상자
    disRegPrson1: String, // (희귀난치) 의료비 지원대상
    /* 의료급여 */
    ykiho: String, // 의료 급여 기관기호
    admType: String, // 승인여부
    cfhcCfrNo: String, // 진료확인번호
    selfPartBrdnAmt: String, // 본인 일부 부담금
    cfhcDmdAmt: String, // 건강생활 유지비 청구액
    pregDmndAmt: String, // 산전지원비청구액
    pregRemAmt: String, // 의료급여 산전 지원금 잔액
    obstRegDt: String // 장애인 등록 일자
  },
  lastModifiedStaff: String,
  lastModifiedTime: Number,
  createTime: Date,
  lunarBirth: Boolean,
  memo: String,
  name: { type: String, index: { name: "name" } },
  newOrExistingPatient: String,
  paymentAmount: Number,
  personalInformationAgreement: Boolean,
  postCode: String,
  profileImage: String,
  recommender: String,
  recommenderInfo: [{ patientId: String, relationship: String, memo: String }],
  registType: Number,
  residentRegistrationNumber: String,
  selectedMedicalInstitution: {
    name: String,
    code: String,
    custom: Boolean
  },
  sex: String,
  sido: String,
  sigungu: String,
  staff: String,
  telephoneNumber: String,
  tendency: String,
  textMessageRefusal: Boolean,
  visitingRoute: String,
  pastReservationStatus: String,
  nextReservationDate: { type: Date },
  latestPlStatus: String,
  latestTeethInfo: {
    tooth11: { rootCanal: [{ location: String, length: String }] },
    tooth12: { rootCanal: [{ location: String, length: String }] },
    tooth13: { rootCanal: [{ location: String, length: String }] },
    tooth14: { rootCanal: [{ location: String, length: String }] },
    tooth15: { rootCanal: [{ location: String, length: String }] },
    tooth16: { rootCanal: [{ location: String, length: String }] },
    tooth17: { rootCanal: [{ location: String, length: String }] },
    tooth18: { rootCanal: [{ location: String, length: String }] },
    tooth21: { rootCanal: [{ location: String, length: String }] },
    tooth22: { rootCanal: [{ location: String, length: String }] },
    tooth23: { rootCanal: [{ location: String, length: String }] },
    tooth24: { rootCanal: [{ location: String, length: String }] },
    tooth25: { rootCanal: [{ location: String, length: String }] },
    tooth26: { rootCanal: [{ location: String, length: String }] },
    tooth27: { rootCanal: [{ location: String, length: String }] },
    tooth28: { rootCanal: [{ location: String, length: String }] },
    tooth31: { rootCanal: [{ location: String, length: String }] },
    tooth32: { rootCanal: [{ location: String, length: String }] },
    tooth33: { rootCanal: [{ location: String, length: String }] },
    tooth34: { rootCanal: [{ location: String, length: String }] },
    tooth35: { rootCanal: [{ location: String, length: String }] },
    tooth36: { rootCanal: [{ location: String, length: String }] },
    tooth37: { rootCanal: [{ location: String, length: String }] },
    tooth38: { rootCanal: [{ location: String, length: String }] },
    tooth41: { rootCanal: [{ location: String, length: String }] },
    tooth42: { rootCanal: [{ location: String, length: String }] },
    tooth43: { rootCanal: [{ location: String, length: String }] },
    tooth44: { rootCanal: [{ location: String, length: String }] },
    tooth45: { rootCanal: [{ location: String, length: String }] },
    tooth46: { rootCanal: [{ location: String, length: String }] },
    tooth47: { rootCanal: [{ location: String, length: String }] },
    tooth48: { rootCanal: [{ location: String, length: String }] },

    tooth51: { rootCanal: [{ location: String, length: String }] },
    tooth52: { rootCanal: [{ location: String, length: String }] },
    tooth53: { rootCanal: [{ location: String, length: String }] },
    tooth54: { rootCanal: [{ location: String, length: String }] },
    tooth55: { rootCanal: [{ location: String, length: String }] },
    tooth61: { rootCanal: [{ location: String, length: String }] },
    tooth62: { rootCanal: [{ location: String, length: String }] },
    tooth63: { rootCanal: [{ location: String, length: String }] },
    tooth64: { rootCanal: [{ location: String, length: String }] },
    tooth65: { rootCanal: [{ location: String, length: String }] },
    tooth71: { rootCanal: [{ location: String, length: String }] },
    tooth72: { rootCanal: [{ location: String, length: String }] },
    tooth73: { rootCanal: [{ location: String, length: String }] },
    tooth74: { rootCanal: [{ location: String, length: String }] },
    tooth75: { rootCanal: [{ location: String, length: String }] },
    tooth81: { rootCanal: [{ location: String, length: String }] },
    tooth82: { rootCanal: [{ location: String, length: String }] },
    tooth83: { rootCanal: [{ location: String, length: String }] },
    tooth84: { rootCanal: [{ location: String, length: String }] },
    tooth85: { rootCanal: [{ location: String, length: String }] }
  },
  fullBirthDate: {
    type: Date,
    index: { name: "fullBirthDate" }
  },
  customerGroupId: { type: "list", list: [String] },
  teeth: { type: "list", list: [Number] }
};

export default patient;
