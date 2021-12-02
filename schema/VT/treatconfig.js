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
          item: String
        }
      ]
    }
  ],
  item: [
    {
      id: String,
      category: String,
      treatment: String,
      fee: Number,
      option: String,
      unit: String
    }
  ],
  version: String,
  lastModifiedStaff: String,
  lastModifiedTime: Number
};

// treatconfig.index({hospitalId:1, id:1}, { unique: true })

export default treatconfig;
