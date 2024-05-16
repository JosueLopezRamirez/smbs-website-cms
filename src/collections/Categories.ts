import { CollectionConfig } from "payload/types";

const Categories: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      label: "Name",
      required: true,
    },
    {
      name: "description",
      type: "text",
      label: "description",
    },
    {
      name: "slug",
      type: "text",
      label: "slug",
      required: true,
    },
  ],
};

export default Categories;
