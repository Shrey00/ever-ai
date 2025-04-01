ALTER TABLE "user" RENAME TO "users";--> statement-breakpoint
ALTER TABLE "pins" DROP CONSTRAINT "pins_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "profile_image" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "pinterest_id" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "username" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "business_name" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "about" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "website_url" text;--> statement-breakpoint
ALTER TABLE "pins" ADD CONSTRAINT "pins_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;