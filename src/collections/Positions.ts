import { CollectionConfig } from "payload/types";

const Position: CollectionConfig = {
  slug: "positions",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Name",
      required: true,
    },
    {
      name: "location",
      type: "text",
      label: "Location",
      required: true,
    },
  ],
};

export default Position;
