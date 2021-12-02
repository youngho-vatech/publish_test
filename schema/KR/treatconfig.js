const treatconfig = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  contents: [
    {
      id: String,
      name: String,
      state: Boolean,
      items: [
        {
          id: String,
          name: String,
          state: Boolean,
          items: [
            {
              id: String,
              name: String,
              item: String
            }
          ]
        }
      ]
    }
  ],
  item: {
    fullname: String,
    category: String,
    diseases: [
      {
        code: String,
        koreanName: String
      }
    ],
    treatments: [
      {
        code: String,
        category: String,
        count: Number,
        number: Number,
        day: Number
      }
    ],
    memo: { type: "list", list: [String] },
    mx999: { type: "list", list: [String] },
    tooltip: String
  },
  version: String,
  lastModifiedStaff: String,
  lastModifiedTime: Number
};

export default treatconfig;
