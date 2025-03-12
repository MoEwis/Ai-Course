// /** @type {import("drizzle-kit").Config} */
// export default {
//   schema: "./configs/schema.jsx",
//   dialect: "postgresql",
//   dbCredentials: {
//     url: process.env.NEXT_PUBLIC_DB_CONNECTION_STRING,
//   },
// };
import { Config } from "drizzle-kit";

/** @type {import("drizzle-kit").Config} */
const config = {
  schema: "./configs/schema.jsx",
  dialect: "postgresql",
  dbCredentials: {
    // استبدل user و password و localhost و database_name بالقيم الصحيحة
    url: "postgresql://neondb_owner:npg_gcSfrLvJyu14@ep-billowing-queen-a426usfr-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require",
  },
};

export default config;
