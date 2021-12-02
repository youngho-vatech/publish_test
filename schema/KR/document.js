const document = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  patient: { type: String, index: { name: "patient" } },
  data: {
    title: String,
    patientInfo: {
      name: String,
      age: String,
      sex: String,
      cellphoneNumber: String,
      phoneNumber: String,
      address: String,
      doctor: String
    },
    order: [
      {
        type: String,
        data: {
          question: String,
          list: [
            {
              checked: Boolean,
              text: String
            }
          ],
          answer: String,
          textData: String,
          title: String,
          description: String,
          date: Date,
          name: String,
          sign: { type: "list", list: [String] }
        }
      }
    ]
  }
};

export default document;
