const config = {
  hospitalId: { type: String, hashKey: true },
  category: { type: String, rangeKey: true },
  hospitalUniqueNumber: String,
  ccSetting: [{ content: String }],
  crownSetting: [
    {
      id: String,
      name: String,
      state: Boolean,
      items: [
        {
          id: String,
          name: String,
          item: {
            contents: [
              {
                tabList: String,
                id: String,
                tabContents: [
                  {
                    material: String,
                    shade: Boolean,
                    pontic: Boolean,
                    deliveryDate: Number,
                    id: String
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  ],
  customerGradeSetting: [{ id: String, content: String }],
  customerGroupSetting: [
    {
      name: String,
      items: [
        {
          name: String,
          id: String,
          state: Boolean,
          items: [
            {
              name: String,
              id: String,
              conditions: Object,
              patients: { type: "list", list: [String] }
            }
          ]
        }
      ]
    }
  ],
  customerTendencySetting: [{ id: String, color: String, content: String }],
  customerVisitingRouteSetting: [{ id: String, content: String }],
  discountSetting: [{ id: String, content: String, value: String }],
  etcIncomeAndOutgoingSetting: {
    income: [{ id: String, content: String, price: Number }],
    outgoing: [{ id: String, content: String, price: Number }]
  },
  eyeFiSetting: { path: String },
  hospitalSetting: {
    hospital: {
      name: String,
      category: String,
      businessLicenseNumber: String,
      // nursingInstitutionNumber: String,
      // industrialAccidentAgencyCode: String,
      // postCode: String,
      address: String, // todo 삭제
      // detailAddress: String,
      // medicalDivisionException: Boolean,
      phoneNumber: String,
      // faxNumber: String,
      homepage: String,
      openDate: Number,
      logo: String,
      email: String,
      idNumber: String,
      location: {
        address: String,
        coordinate: {
          latitude: Number,
          longitude: Number
        },
        detailAddress: String,
        placeId: String
      }
    },
    representative: { type: "list", list: [String] }
  },
  language: String,
  lastModifiedStaff: String,
  lastModifiedTime: Number,
  maSetting: [{ content: String }],
  diagnosisSetting: [{ id: String, content: String }],
  nextSetting: [{ content: String }],
  oeSetting: [
    {
      id: String,
      content: String,
      abbrev: String,
      color: String,
      icon: String,
      link: String,
      entries: Object,
      minimum: Number,
      range: String,
      readonly: Boolean,
      scopes: String
    }
  ],
  otherSetting: {
    flushLog: Boolean,
    isBiteFilm: Boolean,
    isGuideActive: Boolean,
    isHeadSpecificFilm: Boolean,
    isLowerJawFilm: Boolean,
    isOcclusionFilm: Boolean,
    isPanoramaFilm: Boolean,
    isTeethMuscleFilm: Boolean,
    isType14Counting: Boolean,
    loginTimeLimit: Number,
    logPreservationPeriod: Number,
    passwordDayLimit: Number,
    toothNumberingSystem: String
  },
  photoSetting: {
    tags: { type: "list", list: [String] }
  },
  permissionSetting: [
    {
      id: String,
      category: String,
      data: [
        {
          id: String,
          label: String,
          category: String,
          page: Number,
          allow: {
            read: Boolean,
            write: Boolean
          },
          permission: {
            read: Boolean,
            write: Boolean
          },
          items: [
            {
              id: String,
              label: String,
              category: String,
              allow: {
                read: Boolean,
                write: Boolean
              },
              permission: {
                read: Boolean,
                write: Boolean
              },
              items: [
                {
                  id: String,
                  label: String,
                  category: String,
                  allow: {
                    read: Boolean,
                    write: Boolean
                  },
                  permission: {
                    read: Boolean,
                    write: Boolean
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  radioGraphDecodeSetting: [
    {
      id: String,
      name: String,
      state: Boolean,
      items: [
        {
          id: String,
          name: String,
          item: {
            fullName: String,
            content: String,
            conclusion: String
          }
        }
      ]
    }
  ],
  requestDetailSetting: [
    {
      request: String
    }
  ],
  scannerSetting: { path: String },
  smtpSetting: {
    smtpUrl: String,
    ssl: Boolean,
    port: String,
    sender: String,
    password: String
  },
  treatmentPlanSetting: [
    {
      id: String,
      name: String,
      state: Boolean,
      items: [
        {
          id: String,
          name: String,
          state: Boolean,
          item: {
            name: String,
            unit: String,
            price: Number,
            useOption: Boolean,
            option: [
              {
                id: String,
                content: String,
                price: Number
              }
            ]
          }
        }
      ]
    }
  ],
  viewerSetting: {
    platform: String,
    clientId: String,
    secretId: String,
    ipAddr: String,
    portNumber: String,
    protocol: String,
    ezdenti: String
  },
  wireSetting: [
    {
      name: String,
      sizes: { type: "list", list: [String] }
    }
  ],
  workTimeSetting: [
    {
      dayOfWeek: String,
      holiday: Boolean,
      lunch: Boolean,
      dinner: Boolean,
      workTime: {
        begin: Number,
        end: Number
      },
      lunchTime: {
        begin: Number,
        end: Number
      },
      dinnerTime: {
        begin: Number,
        end: Number
      }
    }
  ],
  medicineSetting: [
    {
      id: String,
      name: String,
      form: String
    }
  ],
  prescriptionSetting: [
    {
      id: String,
      name: String,
      state: Boolean,
      items: [
        {
          id: String,
          name: String,
          state: Boolean,
          item: {
            medicines: [
              {
                name: String,
                form: String,
                dose: String,
                times: String,
                days: String,
                usage: String
              }
            ],
            diagnosis: [
              {
                id: String,
                code: String,
                content: String
              }
            ]
          }
        }
      ]
    }
  ],
  googleCalendarSetting: {
    syncPeriod: Number
  },
  treatmentRoomSetting: [
    {
      id: String,
      content: String
    }
  ]
};

export default config;
