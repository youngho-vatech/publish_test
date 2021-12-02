const disease = {
  pk: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  category: String,
  code: String,
  koreanName: String,
  englishName: String,
  canBePrimary: String,
  legalInfectionClassification: String,
  genderClassification: String,
  upperAge: Number,
  lowerAge: Number,
  westernOrOriental: String
};

export default disease;
