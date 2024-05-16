import { CollectionConfig } from "payload/types";

const Posts: CollectionConfig = {
  slug: "posts",
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Title",
          required: true,
          admin: {
            width: "25%",
          },
        },
      ],
    },
    {
      name: "home",
      type: "checkbox",
      label: "Home",
      admin: {
        position: "sidebar",
      }
    },
    {
      name: "author",
      type: "relationship",
      label: "Author",
      relationTo: "authors",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "categories",
      label: "Categories",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "tag",
      type: "relationship",
      relationTo: "tags",
      label: "Tags",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "intro",
      type: "text",
      label: "Intro",
      required: true,
    },
    {
      type: "row",
      fields: [
        {
          name: "order",
          type: "number",
          label: "Position",
          defaultValue: 0,
        },
        {
          name: "page",
          type: "text",
          label: "Page",
        },
      ],
    },
    {
      name: "content",
      type: "richText",
      label: "Content",
    },
    {
      name: "comments",
      type: "textarea",
      label: "Comments",
      admin: {
        hidden: true
      },
    },
  ],
};

export default Posts;
