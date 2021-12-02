const payment = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  date: { type: Date, index: { name: "date" } },
  chart: String,
  patient: { type: String, index: { name: "patient" } },
  payment: {
    gongdan: Number,
    result: Boolean,
    insuranceType: String,
    memo: String,
    charge: {
      price: Number,
      discount: Number,
      discountId: String
    },
    uninsured: {
      price: Number,
      discount: Number,
      discountId: String,
      minus: Boolean,
      minusDiscount: Number
    },
    uninsuredTax: {
      price: Number,
      discount: Number,
      discountId: String,
      minus: Boolean,
      minusDiscount: Number
    },
    health: {
      cfhcDmdAmt: Number,
      cfhcCfrNo: String,
      sbrdnType: String
    }
  },
  paymentHistory: {
    type: "list",
    list: [
      {
        id: String,
        date: Number,
        memo: String,
        staff: String,
        pay: Boolean,
        refund: Boolean,
        mgtKey1: String,
        mgtKey2: String,
        identityNum: String,
        receiptType: String,
        charge: {
          account: Number,
          card: Number,
          cash: Number,
          cashReceipt: Number,
          prePaid: Number,
          prePaidId: String,
          allowance: Boolean
        },
        uninsured: {
          account: Number,
          card: Number,
          cash: Number,
          cashReceipt: Number,
          prePaid: Number,
          prePaidId: String,
          allowance: Boolean
        },
        uninsuredTax: {
          account: Number,
          card: Number,
          cash: Number,
          cashReceipt: Number,
          prePaid: Number,
          prePaidId: String,
          vat: Number
        }
      }
    ]
  },
  prePaid: {
    type: "list",
    list: [
      {
        id: String,
        date: Number,
        account: Number,
        card: Number,
        cash: Number,
        cashReceipt: Number,
        category: String,
        mgtKey: String,
        memo: String,
        refund: Boolean,
        staff: String,
        useCategory: String,
        money: Number
      }
    ]
  },
  etc: {
    type: "list",
    list: [
      {
        id: String,
        date: Number,
        account: Number,
        card: Number,
        cash: Number,
        cashReceipt: Number,
        category: String,
        mgtKey: String,
        memo: String,
        refund: Boolean,
        staff: String,
        useCategory: String,
        prePaid: Number,
        prePaidId: String,
        item: String
      }
    ]
  },
  cashReceipt: {
    type: "list",
    list: [
      {
        date: Number,
        money: Number,
        vat: Number,
        staff: String,
        mgtKey: String,
        classification: String,
        identityNum: String,
        refund: Boolean,
        state: String,
        cancel: Boolean,
        receiptType: String,
        category: String
      }
    ]
  }
};

export default payment;
