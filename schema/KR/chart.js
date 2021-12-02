const chart = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  type: String,
  date: { type: Date, index: { name: "date" } },
  fixed: Boolean,
  patient: { type: String, index: { name: "patient" } },
  patientInfo: {
    residentRegistrationNumber: String,
    doctorId: String,
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
      pregRemAmt: String // 의료급여 산전 지원금 잔액
    },
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
    }
  },
  claim: {
    claim: String,
    claimNumber: String,
    code: String,
    desc: String,
    receiptNumber: String,
    serialNumber: String,
    status: String
  },
  txCodes: { type: "list", list: [String] },
  content: {
    cc: {
      contents: [
        {
          teeth: { type: "list", list: [Number] },
          content: String,
          lastModifiedTime: Number
        }
      ],
      doctor: String,
      staff: String,
      signature: {
        contents: String
      }
    },
    ma: {
      contents: [{ name: String, memo: String }],
      doctor: String,
      staff: String,
      signature: {
        contents: String
      }
    },
    oe: [
      {
        id: String,
        teeth: { type: "list", list: [Number] },
        missings: { type: "list", list: [Number] },
        planes: Object,
        mode: String,
        target: String,
        content: String,
        icons: Object,
        doctor: String,
        staff: String,
        lastModifiedTime: Number,
        signature: {
          contents: String
        },
        memo: String
      }
    ],
    tx: {
      date: {
        type: Date
      },
      insuranceType: String,
      result: String,
      today: Boolean,
      disability: Boolean,
      pregnant: Boolean,
      status: String,
      totalPrice: Number,
      totalCharge: Number,
      totalPriceDenture: Number,
      totalChargeDenture: Number,
      totalPriceOthers: Number,
      totalChargeOthers: Number,
      totalPriceSelectives: Number,
      totalChargeSelectives: Number,
      totalCharge100: Number,
      totalUninsured: Number,
      totalUninsuredTax: Number,
      totalOriginPrice: Number,
      totalOriginCharge: Number,
      totalFixedCharge: Number,
      totalSupport: Number,
      prescriptionNumber: String,
      doctor: String,
      signature: {
        contents: String
      },
      basic: {
        treats: [
          {
            code: String,
            name: String,
            cost: Number,
            price: Number,
            charge: Number,
            count: Number,
            claim: Boolean
          }
        ],
        manual: Boolean,
        contained: Boolean
      },
      durRes: [
        {
          MedcCDA: String,
          ErrorType: String,
          GnlNMCDA: String,
          Message: String,
          reasonCd: String,
          Reason: String,
          MedcCDB: String,
          GnlNMCDB: String
        }
      ],
      js: [{ code: String, contents: String, claim: Boolean }],
      mt: {
        manual: Boolean,
        mt002: String,
        mt014: String,
        diseaseCode: String,
        diseaseName: String
      },
      mx: { content: String, claim: Boolean },
      treatments: [
        {
          id: String,
          name: String,
          fullname: String,
          teeth: { type: "list", list: [Number] },
          missings: { type: "list", list: [Number] },
          treatBtns: [
            {
              id: String,
              name: String,
              category: String
            }
          ],
          department: String,
          diseases: [
            {
              code: String,
              koreanName: String,
              primary: Boolean,
              claim: Boolean
            }
          ],
          doctor: String,
          staff: String,
          memo: String,
          treats: [
            {
              code: String,
              applicationDate: Number,
              category: String,
              name: String,
              price: Number,
              cost: Number,
              charge: Number,
              count: Number,
              number: Number,
              day: Number,
              claim: Boolean,
              exception: Boolean,
              jx: String,
              exceptionCode: String,
              usage: {
                prn: Boolean,
                usage: String
              },
              insuranceType: String,
              mainIngredienCode: String,
              anesthesiologist: {
                name: String,
                licenseNumber: String,
                jobType: String
              },
              errorments: { type: "list", list: [String] },
              rechecks: { type: "list", list: [String] },
              ct: { contents: String, result: String, doctor: String },
              ept: [{ teeth: Number, result: String, value: Number }],
              bloodSugar: {
                fastingPeriod: String,
                bloodSugar: String
              },
              n2o: { begin: Number, end: Number },
              periodontal: [
                {
                  id: String,
                  updatedCount: Number,
                  values: [{ isBleed: Boolean, value: String }],
                  tooth: Number
                }
              ],
              fixture: [
                {
                  product: {
                    manufacturer: String,
                    purchaseDate: Number,
                    name: String,
                    size: String
                  },
                  quality: String,
                  toothID: Number,
                  torque: String
                }
              ],
              abutment: [
                {
                  cuff: String,
                  diameter: String,
                  height: String,
                  hex: String,
                  product: String,
                  toothID: Number,
                  torque: String,
                  type1: String,
                  type2: String
                }
              ],
              rootCanal: [
                {
                  dentalInformation: Number,
                  memo: String,
                  rootCanal: [
                    {
                      directInput: Boolean,
                      file: String,
                      id: String,
                      length: String,
                      location: String
                    }
                  ]
                }
              ],
              wireConfig: {
                lowerJaw: {
                  isCinchBack: Boolean,
                  isFig8: Boolean,
                  isLaceBack: Boolean,
                  isReverseCurve: Boolean,
                  location: String,
                  material: String,
                  size: String
                },
                upperJaw: {
                  isCinchBack: Boolean,
                  isFig8: Boolean,
                  isLaceBack: Boolean,
                  isReverseCurve: Boolean,
                  location: String,
                  material: String,
                  size: String
                }
              },
              entrustedInstitution: {
                entrustedInstitutionId: String,
                nursingInstitutionNumber: String,
                institutionType: String
              },
              isq: [
                {
                  depthValue: Number,
                  tooth: Number,
                  widthValue: Number
                }
              ],
              cavity: [
                { tooth: Number, planes: { type: "list", list: [Number] } }
              ],
              manual: Boolean,
              status: String,
              config: String,
              btnId: String,
              selectiveWage: Number,
              noSelectiveWage: Boolean,
              purchaseId: String,
              signature: {
                contents: String
              },
              ceiling: Number,
              unit: Number
            }
          ],
          images: { type: "list", list: [String] },
          lastModifiedTime: Number,
          signature: {
            contents: String
          }
        }
      ]
    },
    di: {
      docissue: String
    },
    pl: [
      {
        id: String,
        doctor: String,
        staff: String,
        status: String,
        memo: String,
        name: String,
        treatments: [
          {
            id: String,
            teeth: { type: "list", list: [Number] },
            memo: String,
            status: String,
            history: [
              {
                date: Number,
                category: String,
                price: Number,
                option: {
                  id: String,
                  content: String,
                  price: Number
                },
                memo: String,
                status: String
              }
            ],
            price: Number,
            payment: Number,
            content: {
              name: String,
              uuid: String,
              item: {
                name: String,
                unit: String,
                vat: Boolean,
                price: Number,
                useOption: Boolean,
                insurance: Boolean,
                option: {
                  id: String,
                  content: String,
                  price: Number
                }
              }
            },
            discount: {
              uuid: String,
              content: String,
              value: String,
              direct: Boolean,
              result: Number
            },
            lastModifiedTime: Number
          }
        ],
        lastModifiedTime: Number,
        signature: {
          contents: String
        }
      }
    ],
    ps: {
      inspect: Boolean,
      typeCode: String,
      insurance: { check: String, text: String },
      prescription: {
        day: Number,
        number: String,
        valid: String,
        doctor: String,
        licenseNumber: String,
        pregnant: Boolean,
        name: String,
        residentRegistrationNumber: String,
        request: Boolean,
        note: String,
        premature: Boolean
      },
      history: [
        {
          code: String,
          count: String,
          day: String,
          division: String,
          exceptionalClassification: String,
          insurance: Boolean,
          mainIngredienCode: String,
          name: String,
          number: String,
          prn: Boolean,
          salary: String,
          usage: String,
          claim: Boolean
        }
      ],
      injection: [
        {
          code: String,
          count: String,
          day: String,
          division: String,
          mainIngredienCode: String,
          name: String,
          number: String,
          prn: Boolean,
          salary: String,
          usage: String
        }
      ],
      selectedBtn: {
        text: String,
        id: String
      },
      diseases: [
        {
          code: String,
          koreanName: String
        }
      ],
      injectionType: String,
      durRes: [
        {
          MedcCDA: String,
          ErrorType: String,
          GnlNMCDA: String,
          Message: String,
          reasonCd: String,
          Reason: String,
          MedcCDB: String,
          GnlNMCDB: String
        }
      ],
      signature: {
        contents: String
      }
    },
    xr: {
      photoId: String,
      inspectionDate: Number,
      checkingDate: Number,
      doctor: String,
      filetype: String,
      opinion: [
        {
          contentText: String,
          resultText: String,
          selects: { type: "list", list: [Number] }
        }
      ]
    },
    mm: {
      images: { type: "list", list: [String] },
      text: String,
      doctor: String,
      staff: String,
      signature: {
        contents: String
      }
    },
    pt: String, //TODO
    nx: {
      contents: [
        {
          teeth: { type: "list", list: [Number] },
          content: String,
          lastModifiedTime: Number
        }
      ],
      doctor: String,
      staff: String,
      signature: {
        contents: String
      }
    },
    cn: {
      importantFactor: { type: "list", list: [String] },
      memo: String,
      result: String,
      doctor: String,
      staff: String,
      signature: {
        contents: String
      }
    }
  },
  lastModifiedStaff: String,
  lastModifiedTime: Number,
  createTime: {
    type: Date,
    index: { name: "createTime" }
  }
};

export default chart;
