import { CollectionConfig } from "payload/types";

const ContactUs: CollectionConfig = {
  slug: "contact-us",
  labels: {
    singular: "Contact Us",
    plural: "Contact Us",
  },
  fields: [
    {
      name: "name",
      type: "text",
      label: "Name",
      required: true,
    },
    {
      name: "email",
      type: "email",
      label: "Email",
      required: true,
    },
    {
      name: "company",
      type: "text",
      label: "Company",
    },
    {
      name: "phoneNumber",
      type: "text",
      label: "Phone Number",
    },
    {
      name: "Message",
      type: "textarea",
      label: "Message",
    },
  ],
};

export default ContactUs;
