import { integer, json, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const CourseList = pgTable("courselist", {
  id: serial("id").primaryKey(),
  courseId: varchar("courseId").notNull(),
  name: varchar("name").notNull(),
  category: varchar("category").notNull(),
  level: varchar("level").notNull(),
  addQuizzes: varchar("addQuizzes").notNull(),
  courseLanguage: varchar("courseLanguage").notNull(),
  includeVideo: varchar("includeVideo").notNull().default("yes"),
  courseOutput: json("courseOutput").notNull(),
  createdBy: varchar("createdBy").notNull(),
  userName: varchar("userName").notNull(),
  userProfileImage: varchar("userProfileImage").notNull(),
  publish: varchar("publish").notNull().default("false"),
});

export const Chapters = pgTable("chapters", {
  id: serial("id").primaryKey(),
  courseId: varchar("courseId", 255).notNull(),
  chapterId: integer("chapterId").notNull(),
  content: json("content").notNull(),
  videoID: varchar("videoID", 255).notNull(),
});
