
import { pgTable, text, integer,uuid } from "drizzle-orm/pg-core";
export const users = pgTable('users', {
    id: uuid('id').primaryKey().notNull().defaultRandom(),
    accessToken: text('access_token').notNull(),
    refreshToken: text('refresh_token').notNull(),
    expiresIn: integer('expires_in').notNull(),
    refreshTokenExpiresIn: integer('refresh_token_expires_in').notNull(),
    profileImage: text('profile_image'),
    pinterestId: text('pinterest_id'),
    username: text("username"),
    businessName: text('business_name'),
    about: text("about"),
    websiteUrl: text("website_url")
});