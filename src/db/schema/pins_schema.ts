
import { pgTable,  text , varchar, uuid} from "drizzle-orm/pg-core";
import { users } from "./user_schema";
export const pins = pgTable('pins', {
    id: uuid('id').primaryKey().notNull().defaultRandom(),
    userId: uuid('user_id').references(()=>users.id),
    title: text('title'),
    link: text('link'),
    description: text('description'),
    altText: text('alt_text').notNull(),
    image: text('image'),
    board_id: text('board_id'),
    dominant_color: varchar("dominant_color", { length: 10 }),
    board_section_id: text('board_section_id'),
    parent_pin_id: text('parent_pin_id'),
    note: text('note'),
});