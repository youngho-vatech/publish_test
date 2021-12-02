const disease = {
  pk: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  code: { type: String, index: { name: "code" } },
  diagnosis: String,
  dentalDisease: String,
  md: String,
  dd: String
};

export default disease;
