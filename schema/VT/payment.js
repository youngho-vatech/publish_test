const payment = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  date: { type: Date, index: { name: "date" } },
  chart: String,
  patient: { type: String, index: { name: "patient" } },
  payment: {
    discount: Number,
    discountId: String,
    memo: String,
    result: Boolean,
    discountType: String,
    treatments: [
      {
        uuid: String,
        teeth: [Number],
        treats: [
          {
            folder: String,
            category: String,
            id: String,
            name: String,
            price: Number,
            discount: Number,
            discountId: String
          }
        ]
      }
    ]
  },
  prePaid: [
    {
      id: String,
      date: Number,
      category: String,
      useCategory: String,
      staff: String,
      card: Number,
      account: Number,
      cash: Number,
      memo: String,
      money: Number,
      refund: Boolean
    }
  ],
  etc: [
    {
      date: Number,
      category: String,
      item: String,
      staff: String,
      card: Number,
      account: Number,
      cash: Number,
      prePaid: Number,
      prePaidId: String,
      memo: String,
      refund: Boolean,
      qty: Number,
      unitPrice: Number
    }
  ]
};

export default payment;
