const customergroup = {
  hospitalId: { type: String, hashKey: true },
  items: {
    type: "list",
    list: [
      {
        name: String,
        items: {
          type: "list",
          list: [
            {
              name: String,
              id: String,
              state: Boolean,
              items: {
                type: "list",
                list: [
                  {
                    name: String,
                    id: String,
                    conditions: Object,
                    patients: { type: "list", list: [String] }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  },
  lastModifiedStaff: String,
  lastModifiedTime: Number,
  createTime: { type: Date }
};

export default customergroup;
