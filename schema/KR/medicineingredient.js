const medicineingredient = {
  code: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  doseRoute: String,
  name: {
    type: String,
    index: { name: "name" }
  },
  nameWithoutSpace: String
};

export default medicineingredient;
