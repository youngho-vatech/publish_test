const uninsurance = {
  hospitalId: { type: String, hashKey: true },
  code: { type: String, rangeKey: true },
  name: { type: String, index: { name: "name" } },
  nameWithoutSpace: { type: String, index: { name: "nameWithoutSpace" } },
  details: String,
  unit: String,
  price: Number,
  default: Boolean
};

export default uninsurance;
