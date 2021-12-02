const laborder = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  requestId: String,
  connectedRequestId: String,
  type: String,
  deliveryType: String,
  deliveryRequestDate: {
    type: Date,
    index: { name: "deliveryRequestDate" }
  },
  detail: { type: "list", list: [String] },
  doctor: String,
  lab: String,
  cleverLabUUID: String,
  mailCheck: String,
  manufacture: { id: String, name: String },
  memo: String,
  note: String,
  patient: { type: String, index: { name: "patient" } },
  photo: { type: "list", list: [String] },
  pontic: { type: "list", list: [String] },
  requestDate: {
    type: Date,
    index: { name: "requestDate" }
  },
  shade: {
    product: String,
    manufacturer: String,
    top: String,
    middle: String,
    bottom: String
  },
  staff: String,
  state: String,
  teeth: { type: "list", list: [Number] },
  missings: { type: "list", list: [Number] },
  createTime: {
    type: Date,
    index: { name: "createTime" }
  }
};

export default laborder;
