const history = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  text: [{ fixed: Boolean, content: String }],
  notify: [{ category: String, title: String, keyId: String }]
};

export default history;
