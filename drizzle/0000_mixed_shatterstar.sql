CREATE TABLE "pins" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid,
	"title" text,
	"link" text,
	"description" text,
	"alt_text" text NOT NULL,
	"image" text,
	"board_id" text,
	"dominant_color" varchar(10),
	"board_section_id" text,
	"parent_pin_id" text,
	"note" text
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"access_token" text NOT NULL,
	"refresh_token" text NOT NULL,
	"expires_in" integer NOT NULL,
	"refresh_token_expires_in" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "pins" ADD CONSTRAINT "pins_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;