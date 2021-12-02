const commonProduct = {
  def: { type: String, hashKey: true },
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

export default commonProduct;
