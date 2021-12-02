const hirarejectcode = {
  id: { type: String, hashKey: true },
  type: { type: String, rangeKey: true },
  majorCategory: String,
  minorCategory: String,
  name: String,
  example: String,
  endStatus: String
};

export default hirarejectcode;
