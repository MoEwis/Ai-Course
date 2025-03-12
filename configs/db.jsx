import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

// const sql = neon(env.local.NEXT_PUBLIC_DB_CONNECTION_STRING);
const sql = neon(
  "postgresql://neondb_owner:npg_gcSfrLvJyu14@ep-billowing-queen-a426usfr-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require"
);
export const db = drizzle(sql);
