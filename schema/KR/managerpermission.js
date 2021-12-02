const managerpermission = {
  id: String,
  permission: [
    {
      id: String,
      category: String,
      data: [
        {
          id: String,
          label: String,
          category: String,
          page: Number,
          allow: {
            read: Boolean,
            write: Boolean
          },
          permission: {
            read: Boolean,
            write: Boolean
          },
          items: [
            {
              id: String,
              label: String,
              category: String,
              allow: {
                read: Boolean,
                write: Boolean
              },
              permission: {
                read: Boolean,
                write: Boolean
              },
              items: [
                {
                  id: String,
                  label: String,
                  category: String,
                  allow: {
                    read: Boolean,
                    write: Boolean
                  },
                  permission: {
                    read: Boolean,
                    write: Boolean
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export default managerpermission;
