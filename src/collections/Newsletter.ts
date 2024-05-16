import { CollectionConfig } from "payload/types";

const Newsletter: CollectionConfig = {
  slug: "newsletter",
  fields: [
    {
      name: "email",
      type: "email",
      label: "Contact Email Address",
      required: true,
    },
    // {
    //   name: "date",
    //   type: "date",
    //   access: {
    //     update: () => false,
    //   },
    //   admin: {
    //     readOnly: true,
    //     position: 'sidebar',
    //     condition: data => Boolean(data?.date)
    //   },
    // },
  ],
//   hooks: {
//     beforeChange: [
//       ({ req, operation, data }) => {
//         if (operation === "create") {
//           data.date = new Date().toISOString();
//           return data;
//         }
//       },
//     ],
//   },
};

export default Newsletter;
