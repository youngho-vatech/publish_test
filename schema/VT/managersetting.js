const managersetting = {
  id: { type: String, hashKey: true },
  category: { type: String, rangeKey: true },
  managerSmtp: {
    host: String,
    port: Number,
    secure: Boolean, // true for 465, false for other ports
    auth: {
      user: String,
      pass: String
    },
    createTime: {
      type: Date,
      index: { name: "createTime" }
    }
  },
  permission: [
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
  otherSetting: {
    passwordDayLimit: Number,
    loginTimeLimit: Number,
    logPreservationPeriod: Number,
    expirationNotice: Number
  }
};

export default managersetting;
