ALTER TABLE "users" RENAME TO "user";--> statement-breakpoint
ALTER TABLE "pins" DROP CONSTRAINT "pins_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "pins" ADD CONSTRAINT "pins_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;