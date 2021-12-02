const zalo = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  displayName: String,
  zaloIntegrationId: String,
  officialAccountId: String,
  officialAccountSecret: String,
  zaloAppId: String,
  zaloAppSecret: String,
  oaAccessToken: String
};

export default zalo;
