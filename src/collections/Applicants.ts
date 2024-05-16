import { CollectionConfig } from "payload/types";

const Applicants: CollectionConfig = {
  slug: "applicants",
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "name",
          type: "text",
          label: "Name",
          required: true,
          admin: {
            width: "25%",
          },
        },
        {
          name: "email",
          type: "email",
          label: "Email",
          required: true,
          admin: {
            width: "25%",
          },
        },
        {
          name: "country",
          type: "text",
          label: "Country",
          admin: {
            width: "25%",
          },
        },
        {
          name: "phoneNumber",
          type: "text",
          label: "Phone Number",
          required: true,
          admin: {
            width: "25%",
          },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "position",
          type: "relationship",
          relationTo: ["positions"],
          label: "Position",
          required: true,
          admin: {
            width: "50%",
          },
        },
        {
          name: "englishLevel",
          type: "select",
          label: "English Level",
          required: true,
          admin: {
            width: "50%",
          },
          options: [
            {
              label: "Basic",
              value: "basic",
            },
            {
              label: "Intermediate",
              value: "intermediate",
            },
            {
              label: "Advanced",
              value: "advanced",
            },
          ],
        },
      ],
    },
  ],
};

export default Applicants;
