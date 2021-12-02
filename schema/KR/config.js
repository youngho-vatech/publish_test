const config = {
  hospitalId: { type: String, hashKey: true },
  category: { type: String, rangeKey: true },
  hospitalUniqueNumber: String,
  automaticMessageSetting: [
    {
      classification: String,
      content: String,
      cycle: String,
      expiration: String,
      group: String,
      periodOption: String,
      specificDate: Number,
      title: String,
      transmissionTime: Number
    }
  ],
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
  customerAlarmSetting: {
    appointmentAlarm: {
      content: String,
      daysBefore: Number,
      daysBeforeAlt: Number,
      fileBase: String,
      fileName: String,
      isActive: Boolean,
      sendDaysBefore: Boolean,
      sendOnDay: Boolean,
      title: String,
      transmissionTime: Number
    },
    missedAppointmentAlarm: {
      content: String,
      daysBefore: Number,
      daysBeforeAlt: Number,
      fileBase: String,
      fileName: String,
      isActive: Boolean,
      sendDaysBefore: Boolean,
      sendOnDay: Boolean,
      title: String,
      transmissionTime: Number
    }
  },
  customerCallNameSetting: [{ id: String, content: String }],
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
  entrustedInstitutionSetting: [
    {
      id: String,
      name: String,
      state: Boolean,
      items: [
        {
          id: String,
          name: String,
          item: {
            id: String,
            fullName: String,
            category: String,
            nursingHomeNo: String,
            hospitalClassification: String,
            rating: String,
            nuclearMedicineCertification: Boolean,
            pathologyCertification: Boolean
          }
        }
      ]
    }
  ],
  etcIncomeAndOutgoingSetting: {
    income: [{ id: String, content: String, price: Number }],
    outgoing: [{ id: String, content: String, price: Number }]
  },
  eyeFiSetting: { path: String },
  fileSetting: [{ id: String, content: String }],
  fixtureSetting: [
    {
      hidden: Boolean,
      company: String,
      product: String,
      size: String,
      date: Number
    }
  ],
  hospitalSetting: {
    hospital: {
      name: String,
      category: String,
      businessLicenseNumber: String,
      nursingInstitutionNumber: String,
      industrialAccidentAgencyCode: String,
      postCode: String,
      address: String,
      detailAddress: String,
      medicalDivisionException: Boolean,
      phoneNumber: String,
      faxNumber: String,
      homepage: String,
      openDate: Number,
      logo: String,
      email: String,
      idNumber: String
    },
    personalInformation: {
      manager: String,
      enactmentDate: Number,
      anoucementDate: Number,
      enforcementDate: Number
    },
    representative: { type: "list", list: [String] },
    billing: {
      insurance: {
        id: String,
        password: String
      },
      agency: {
        useAgencyBilling: Boolean,
        code: String,
        writerName: String,
        birthDate: Number
      }
    },
    etc: {
      acquisitionDate: Number,
      ignoreOutStanding: Boolean
    }
  },
  language: String,
  lastModifiedStaff: String,
  lastModifiedTime: Number,
  maSetting: [{ content: String }],
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
  oralExamPhraseSetting: [
    {
      id: String,
      state: Boolean,
      category: String,
      items: [
        {
          id: String,
          category: String,
          dataType: String,
          option: [
            {
              id: String,
              category: String,
              content: String
            }
          ]
        }
      ]
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
    passwordDayLimit: Number
  },
  photoSetting: {
    tags: { type: "list", list: [String] }
  },
  partnerSetting: [
    {
      id: String,
      name: String,
      state: Boolean,
      items: [
        {
          name: String,
          state: Boolean,
          id: String,
          item: {
            title: String,
            partnerName: String,
            businessNumber: String,
            phoneNumber: String,
            faxNumber: String,
            email: String,
            bank: String,
            bankAccountNumber: String,
            holder: String,
            repName: String,
            repContact: String,
            memo: String
          }
        }
      ]
    }
  ],
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
  popbillSMSSetting: {
    id: String,
    password: String,
    number: String
  },
  prescriptionSetting: [
    {
      id: String,
      name: String,
      state: Boolean,
      items: [
        {
          id: String,
          name: String,
          item: {
            id: String,
            fullname: String,
            diseases: [
              {
                code: String,
                koreanName: String
              }
            ],
            medicines: [
              {
                division: String,
                name: String,
                code: String,
                count: String,
                mainIngredienCode: String,
                number: String,
                day: String,
                usage: String,
                prn: Boolean
              }
            ]
          }
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
  schoolBankAccountSetting: {
    bank: String,
    account: String,
    owner: String
  },
  schoolSetting: [
    {
      id: String,
      name: String,
      state: Boolean,
      item: {
        name: String,
        category: String,
        option: [
          {
            id: String,
            contractYear: Number,
            price: Number,
            grade: String
          }
        ]
      }
    }
  ],
  smsSetting: [
    {
      id: String,
      name: String,
      state: Boolean,
      items: [
        {
          id: String,
          name: String,
          state: Boolean,
          item: { name: String }
        }
      ]
    }
  ],
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
            vat: Boolean,
            price: Number,
            useOption: Boolean,
            insurance: Boolean,
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
  ]
};

export default config;
