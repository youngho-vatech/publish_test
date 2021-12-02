const connection = {
  hospitalId: { type: String, hashKey: true },
  connectionId: { type: String, rangeKey: true },
  name: String,
  srcId: String,
};

export default connection;
