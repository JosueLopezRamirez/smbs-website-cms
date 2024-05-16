import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";

import Users from "./collections/Users";
import Newsletter from "./collections/Newsletter";
import Categories from "./collections/Categories";
import Authors from "./collections/Authors";
import ContactUs from "./collections/ContactUs";
import Position from "./collections/Positions";
import Applicants from "./collections/Applicants";
import Tags from "./collections/Tags";
import Posts from "./collections/Posts";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    // css: path.resolve(__dirname, '/styles/main.scss'),
  },
  editor: slateEditor({}),
  collections: [
    Users,
    Newsletter,
    Categories,
    Authors,
    ContactUs,
    Position,
    Applicants,
    Tags,
    Posts,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
});
