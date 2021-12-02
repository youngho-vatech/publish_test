const product = {
  def: { type: String, hashKey: true },
  hospital: { type: String, index: { name: "hospital" } },
  major: { type: String, index: { name: "major" } },
  minor: { type: String, index: { name: "minor" } },
  productID: { type: String, rangeKey: true },
  productName: { type: String, index: { name: "productName" } },
  origin: String,
  manufacture: String,
  unit: String,
  dvFamilyPrice: Number,
  specialPrice: Number,
  retailPrice: Number,
  material: Boolean,
  fixureOrder: Number,
  order: Number,
  confirm: Boolean,
  QRcode: String,
  storage: {
    hospital: String,
    important: Boolean,
    unit: String,
    currentCnt: Number,
    optCnt: Number,
    alert: Boolean,
    editDate: Number,
    editorID: String,
    canExpire: Boolean,
    binCnt: Number,
    expire: [
      {
        expireDate: Number,
        expireThirtySoon: Boolean,
        expireCount: Number
      }
    ],
    barcode: Boolean,
    isAppropriate: Boolean
  }
};

export default product;
