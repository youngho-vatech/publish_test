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
  material: Boolean,
  fixureOrder: Number,
  order: Number,
  confirm: Boolean
};

export default product;
